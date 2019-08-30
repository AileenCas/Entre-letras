<template>
    <div id="app">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-toggle autoHide="false">
                    <ion-menu-button></ion-menu-button>
                </ion-menu-toggle>
            </ion-buttons>
            <ion-buttons slot="start">
            <ion-title>Entre letras</ion-title>
            </ion-buttons>
        </ion-toolbar>
        <ion-router-outlet id="menu-content" main></ion-router-outlet>
    </div>
</template>

<script>
    export default {
        name: "Toolbar",
        methods:{
            ira: function (nombre) {
                this.$router.push({
                    name: nombre
                })
            },
        },
    }
</script>

<style scoped>

</style>