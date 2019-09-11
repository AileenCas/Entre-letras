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
                    <ion-item button="true" @click="Ayuda()"><ion-icon name="help-circle"></ion-icon> <ion-label>¿Necesitas ayuda?</ion-label></ion-item>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-router-outlet main></ion-router-outlet>
    </ion-app>
</template>
<script>
    export default {
        name: 'Menu',
        methods: {
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
            Ayuda: function () {
                return this.$ionic.push({name:'Ayuda'})
            },
        },
    }
</script>