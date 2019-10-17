<template>
    <ion-app>
        <Toolbar/>
        <Menu/>
        <img class="icon" src="../assets/icon.png">
        <ion-input id="nombre"><ion-icon name="contact"></ion-icon> Usuario: </ion-input>
        <ion-input id="email"><ion-icon name="mail"></ion-icon> Correo electrónico: </ion-input>
        <ion-input id="nivel" readonly><ion-icon name="trophy"></ion-icon> Nivel: </ion-input>
        <ion-input id="exp" readonly><ion-icon name="logo-game-controller-b"></ion-icon> Experiencia: </ion-input>
        <ion-button class="btn" @click="actualizar">Actualizar datos</ion-button>
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
            db.collection('usuarios').doc(firebase.auth().currentUser.email).get().then(doc=>{
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

</style>