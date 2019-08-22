<template>
    <div id="app">
        <div>
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Palabras agudas </h1>
          </div>
        <p>Las palabras agudas son las que llevan acento en la última sílaba. </p>
        <p>Las palabras agudas llevan tilde si terminan en vocal: </p>
            Perú - sofá - café - rubí - menú - marroquí - bebé
        <p>  Las palabras agudas llevan tilde si terminan en N o S:</p>
            también - algún - jamás - según - sillón - además - organización - capitán - alemán - anís - canción
        <p>   Hay palabras agudas que tienen tilde a pesar de NO terminar en vocal, N o S. Esto es por la ruptura del diptongo:</p>
            Raúl, baúl, raíz, maíz

    </div>
</template>

<script>
    export default {
        name: "Agudas",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>