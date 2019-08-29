<template>
    <ion-app>
        <ion-menu side="start">
            <ion-header>
                <ion-toolbar>
                    <ion-title>Menú</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item button="true" @click="Inicio()">Inicio</ion-item>
                    <ion-item button="true" @click="Perfil()">¡Ve a tu perfil!</ion-item>
                    <ion-item button="true" @click="Comparte">¡Comparte con tus amigos!</ion-item>
                    <ion-item button="true" @click="Ayuda()">¿Necesitas ayuda?</ion-item>
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
                this.$router.push({name: 'Bienvenida'})
            },
            Perfil: function () {
                this.$router.push({name:'Perfil'})
            },
            Comparte: function (){
                return this.$ionic.alertController.create({
                    header:'¡Comparte con tus amigos!',
                    button:{text:'Gmail'}
                })
                    .then(a => a.present())
                    },
            Ayuda: function () {
                return this.$ionic.push({name:'Ayuda'})

            }
        },
    }
</script>