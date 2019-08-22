<template>
    <div id="app">
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Palabras esdrújulas </h1>
        <p>Las palabras esdrújulas son las que llevan la intensidad de la voz en la antepenúltima sílaba.</p>
        <p>Ejemplos de palabras esdrújulas:</p>

    <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <img  class="imgA" src="../assets/esdru2.png">
        </ion-slide>
        <ion-slide>
            <img  class="imgA" src="../assets/esdru3.png">
        </ion-slide>
        <ion-slide>
            <img  class="imgA" src="../assets/esdru4.png">
        </ion-slide>
        <ion-slide>
        <img  class="imgA" src="../assets/esdru5.png">
        </ion-slide>
        <ion-slide>
            <img  class="imgA" src="../assets/esdru6.png">
        </ion-slide>
        <ion-slide>
            <img  class="imgA" src="../assets/esdru7.png">
        </ion-slide>
    </ion-slides>
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