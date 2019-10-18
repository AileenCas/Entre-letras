<template>
    <ion-app>
        <Toolbar/>
        <Menu/>
        <ion-page>
            <ion-list>
                <ion-list-header>
                    <img class="icon" src="../assets/icon.png">
                </ion-list-header>
                <ion-item-sliding>
                    <ion-item>
                        <ion-label><ion-icon name="contact"></ion-icon>Nombre: </ion-label>
                        <ion-note slot="end" color="primary"><ion-input id="nombre" class="input"></ion-input></ion-note>
                    </ion-item>

                    <ion-item>
                        <ion-label><ion-icon name="mail"></ion-icon>Correo:</ion-label>
                        <ion-note slot="end" color="secondary"><ion-input id="email" class="input"></ion-input></ion-note>
                    </ion-item>

                    <ion-item>
                        <ion-label> <ion-icon name="trophy"></ion-icon>Nivel:</ion-label>
                        <ion-note slot="end" color="tertiary"> <ion-input id="nivel" class="input" readonly></ion-input></ion-note>
                    </ion-item>

                    <ion-item>
                        <ion-label><ion-icon name="logo-game-controller-b"></ion-icon>EXP:</ion-label>
                        <ion-note slot="end" color="success"><ion-input id="exp" readonly class="input"></ion-input></ion-note>
                    </ion-item>

                    <ion-item>
                        <ion-button class="btn" @click="actualizar">Actualizar datos</ion-button>
                    </ion-item>
                    </ion-item-sliding>
            </ion-list>

        </ion-page>
    </ion-app>
</template>
<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    import firebase from '../libFirebase'
    import db from "../libFirestore"

    export default {
        name: "Perfil",
        components: {
            Toolbar, Menu
        },
        mounted() {
            document.getElementById('nombre').value = firebase.auth().currentUser.displayName;
            document.getElementById('email').value = firebase.auth().currentUser.email;
            db.collection('usuarios').doc(firebase.auth().currentUser.email).get().then(doc => {
                document.getElementById('nivel').value = doc.data().nivel;
                document.getElementById('exp').value = doc.data().exp + ' XP'

            });
        },
        methods: {
            actualizar: function () {
                firebase.auth().currentUser.updateProfile({
                    displayName: document.getElementById('nombre').value
                }).then(function () {
                });
                firebase.auth().currentUser.updateEmail(document.getElementById('email').value).then(function () {
                    firebase.auth().sendEmailVerification().then(function () {
                        // Email sent.
                    }).catch(function (error) {
                        // An error happened.
                    });
                }).catch(function (error) {
                    // An error happened.
                });
            }
        }
    }
</script>

<style scoped>
.input{
    font-size: 15px;
    margin-top: 5px;
    left: 10px;

}
    ion-note{
        margin-left: 0;
        padding: 0;
    }
</style>