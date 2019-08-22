<template>
    <div id="app">
        <div>
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Palabras esdrújulas </h1>
        </div>
        <p>Las palabras esdrújulas son las que llevan la intensidad de la voz en la antepenúltima sílaba.</p>
        <p>Ejemplos de palabras esdrújulas:</p>
        América - Bélgica - Sudáfrica - música - miércoles - sílaba - máquina - gramática
        - económico - pájaro - séptimo - cuídate - brújula - gótico - hígado – ejército
    </div>
</template>

<script>
    export default {
        name: "Esdru",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>