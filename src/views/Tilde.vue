<template>
    <div id="App">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>La tilde</h1>
        <p>Las tildes son signos gráficos para marcar acentos. 
            En español existe solo un tipo de tilde al escribirla, y solo se hará sobre las vocales.</p>
        <img src="../assets/tilde1.png">

    </div>
</template>

<script>
    export default {
        name: "Tilde",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
    },
    }
</script>

<style scoped>

</style>