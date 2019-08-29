<template>
    <div id="app">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-toggle autoHide="false">
                    <ion-menu-button></ion-menu-button>
                </ion-menu-toggle>
            </ion-buttons>
            <ion-buttons slot="secondary">
                <ion-button>
                    <ion-icon slot="icon-only" name="contact" button="true" @click="ira('User')"></ion-icon>
                </ion-button>
                <ion-menu>
                    <ion-header>
                        <ion-toolbar color="primary">
                            <ion-title>Start Menu</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content>
                        <ion-list>
                            <ion-item button="true"  @click="Pag()">Página principal</ion-item>
                            <ion-item button="true" @click="Perfil()">Perfil</ion-item>
                            <ion-item button="true" @click="Ayuda()">Ayuda</ion-item>
                        </ion-list>
                    </ion-content>
                </ion-menu>
            </ion-buttons>
            <ion-title>Entre letras</ion-title>
        </ion-toolbar>

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