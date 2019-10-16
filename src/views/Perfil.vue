<template>
    <ion-app>
        <Toolbar/>
        <Menu/>
        <img class="icon" src="../assets/icon.png">
        <ion-input id="nombre">Usuario: </ion-input>
        <ion-input id="email"> Correo electrónico: </ion-input>
        <ion-input id="nivel"> Nivel: </ion-input>
        <ion-button class="btn" @click="actualizar">Actualizar datos</ion-button>
    </ion-app>
</template>
<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    import firebase from 'firebase'


    export default {
        name: "Perfil",
        components: {
            Toolbar, Menu
        },
        mounted() {
            document.getElementById('nombre').value = firebase.auth().currentUser.displayName;
            document.getElementById('email').value = firebase.auth().currentUser.email;
            document.getElementById('nivel').value = db.collection('usuarios').doc(firebase.auth().currentUser.email).get().then(doc => {
                return doc.nivel
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