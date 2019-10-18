<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
        <ion-list>
        <ion-card color="primary" button="true" class="cards cardsTablero" @click="irA('Temas')">
            <ion-card-header>
                <ion-card-title>¡Amplía tus conocimientos!</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card  color="primary" button="true" class="cards cardsTablero" @click="irA('retos')">
            <ion-card-header>
                <ion-card-title>¡Ponte a prueba!</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card color="primary" button="true" class="cards cardsTablero" @click="irA('Resultados')">
            <ion-card-header>
                <ion-card-title>¡Conoce tus resultados!</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card color="primary" button="true" class="cards cardsTablero" @click="irA('Tips')">
            <ion-card-header>
                <ion-card-title>Curiosidades</ion-card-title>
            </ion-card-header>
        </ion-card>
        </ion-list>
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
        }
    }
</script>

<style scoped>
    @import "../assets/styles.css";
    .cardsTablero{
        height: 120px;
        display: flex;
        align-items: center;
        background: #2196F3;
    }
    ion-card-title{
        font-size: 24px;
    }
</style>