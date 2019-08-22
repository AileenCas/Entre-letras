<template>
    <div id="app">
        <div>
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Palabras graves </h1>
        </div>
        <p>Las palabras graves son las que llevan acento en la penúltima sílaba.</p>
        <p>Las palabras graves NO llevan tilde si terminan en VOCAL o en N o S: </p>
        <p>Ejemplos de palabras graves CON tilde:</p>
            árbol - cárcel - ángel - difícil - túnel - azúcar - lápiz - césped - fácil - útil - carácter - débil
        <p>Ejemplos de palabras graves SIN tilde:</p>
            problema - adulto - martes - zapato - volumen - pesca - amazonas - tasa - piso


    </div>
</template>

<script>
    export default {
        name: "Graves",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>