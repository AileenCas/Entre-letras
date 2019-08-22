<template>
    <div id="app">
        <div>
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Palabras sobresdrújulas </h1>
        </div>
        <p>Las palabras sobresdrújulas son las que llevan la intensidad de la voz en la sílaba anterior a la antepenúltima sílaba. Todas llevan tilde.</p>
        <p>   Ejemplos de palabras sobresdrújulas:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h1>Cuéntamelo</h1></ion-slide>
            <ion-slide><h1>Devuélveselo</h1></ion-slide>
            <ion-slide><h1> Éticamente</h1></ion-slide>
            <ion-slide><h1>Fácilmente</h1></ion-slide>
            <ion-slide><h1>Explícaselo</h1></ion-slide>
            <ion-slide><h1>Rápidamente</h1></ion-slide>
            <ion-slide><h1>Juégatela </h1></ion-slide>
            <ion-slide><h1>Véndemelo</h1></ion-slide>
            <ion-slide><h1>Repíteselo </h1></ion-slide>
            <ion-slide><h1>Frívolamente</h1></ion-slide>
            <ion-slide><h1>Ágilmente </h1></ion-slide>
        </ion-slides>
    </div>
</template>

<script>
    export default {
        name: "Sobre",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>