<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Signos de interrogación</h1>
        <p>Los signos de interrogación son signos ortográficos dobles que se utilizan para indicar que un enunciado se transforma en una pregunta.</p>
       <img src="../assets/inte1.png">
        <p>Ejemplos</p>
        <img src="../assets/inte2.png">
    </div>
</template>

<script>
    export default {
        name: "Inte",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
        },
    }
</script>

<style scoped>

</style>