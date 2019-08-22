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
        cuéntamelo - devuélveselo - éticamente - fácilmente - explícaselo - rápidamente - juégatela - véndemelo - repíteselo - frívolamente – ágilmente
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