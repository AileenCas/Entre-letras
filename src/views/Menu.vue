<template>
    <ion-app>
        <ion-menu contentId="menu-content" side="start" >
            <ion-header>
                <ion-toolbar>
                    <ion-title>Menú</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item button="true" @click="Inicio()"><ion-icon name="home"></ion-icon> <ion-label>Inicio</ion-label></ion-item>
                    <ion-item button="true" @click="Perfil()"><ion-icon name="person"></ion-icon> <ion-label>¡Ve a tu perfil!</ion-label></ion-item>
                    <ion-item button="true" @click="Comparte()"><ion-icon name="people"></ion-icon> <ion-label>¡Comparte con tus amigos!</ion-label></ion-item>
                    <ion-item button="true" @click="cerrarSesion()"><ion-icon name="log-out"></ion-icon> <ion-label>Cerrar sesión</ion-label></ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-router-outlet main></ion-router-outlet>
    </ion-app>
</template>
<script>
    import firebase from 'firebase'
    export default {
        name: 'Menu',
        props: {
            timeout: {type: Number, default: 2000},
        },
        methods: {
            presentLoading(mensaje) {
                return this.$ionic.loadingController
                    .create({
                        message: mensaje,
                        duration: this.timeout,
                    })
                    .then(l => {
                        setTimeout(function () {
                            l.dismiss()
                        }, this.timeout);
                        return l.present()
                    })
            },
            Inicio: function () {
                this.$router.push({name: 'TableroPrincipal'})
            },
            Perfil: function () {
                this.$router.push({name:'Perfil'})
            },
            Comparte: function (){
                return this.$ionic.alertController
                    .create({
                    header: '¡Comparte con tus amigos!',
                    buttons: ['Salir','Gmail'],
                }).then(a => a.present())
            },
            cerrarSesion: function () {
                firebase.auth().signOut();
                this.presentLoading('Cerrando sesión...');
                setTimeout(() => {
                    this.$router.push({path: '/'})
                }, 2000)
            },
        },
    }
</script>