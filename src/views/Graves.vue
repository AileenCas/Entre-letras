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
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <img  class="imgA" src="../assets/grave1.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/grave2.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/grave3.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/grave4.png">
            </ion-slide>
        </ion-slides>

        <p>Ejemplos de palabras graves SIN tilde:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h1>Problema</h1></ion-slide>
            <ion-slide><h1>Adulto</h1></ion-slide>
            <ion-slide><h1>Martes</h1></ion-slide>
            <ion-slide><h1>Zapato</h1></ion-slide>
            <ion-slide><h1>Volumen</h1></ion-slide>
            <ion-slide><h1>Pesca</h1></ion-slide>
            <ion-slide><h1>Amazonas</h1></ion-slide>
            <ion-slide><h1>Tasa</h1></ion-slide>
            <ion-slide><h1>Piso</h1></ion-slide>
        </ion-slides>
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