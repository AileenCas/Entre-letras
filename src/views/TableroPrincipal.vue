<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
        <ion-card color="primary" button="true" class="cards" @click="irA('Temas')">
            <ion-card-header>
                <ion-card-title>¡Amplía tus conocimientos !</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card  color="primary" button="true" class="cards" @click="irA('retos')">
            <ion-card-header>
                <ion-card-title>¡Ponte a prueba!</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card  color="primary" button="true" class="cards" @click="irA('Comparte')">
            <ion-card-header>
                <ion-card-title>¡Participa con tus amigos!</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card color="primary" button="true" class="cards" @click="irA('Resultados')">
            <ion-card-header>
                <ion-card-title>¡Conoce tus resultados!</ion-card-title>
            </ion-card-header>
        </ion-card>
    </div>
</template>

<script>
    import Menu from './Menu'
    import Toolbar from './Toolbar'
    import router from '../router'

    export default {
        name: "TableroPrincipal",

        // eslint-disable-next-line vue/no-unused-components
        components: {Menu, Toolbar },
        methods: {
            irA: function (nombre) {
                router.push({
                    name: nombre
                })
            }
        },
        mounted() {
            document.body.style.background = "#283593";
        }
    }
</script>

<style scoped>
    @import "../assets/styles.css";
</style>