<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <ion-button  expand="full" class="btnD" @click="Compu()" > ¡Espera! </ion-button>
        <h1>Tilde en palabras compuestas</h1>
        <p>
            En palabras formadas por dos o más elementos, la tilde depende de si la palabra resultante tiene o no guión:<p>
           <p> Si no lo tiene, la primera palabra original pierde su acento y la segunda, lo conserva.<p>
        <p>Ejemplo:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h2>Decimoséptimo </h2></ion-slide>
            <ion-slide><h2>Ciempiés</h2></ion-slide>
            <ion-slide><h2>Puntapié</h2></ion-slide>
        </ion-slides>
        <p>Si lo tiene, cada elemento conserva su tilde original. </p>
        <h2>Ejemplo: </h2>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h2>Histórico-crítico.</h2></ion-slide>
            <ion-slide><h2>Económico-social.</h2></ion-slide>
            <ion-slide><h2>Teórico-práctico.</h2></ion-slide>
        </ion-slides>

    </div>
</template>

<script>
    export default {
        name: "Compuestas",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
            Compu:function () {
                return this.$ionic.alertController.create({
                    subHeader:' Las palabras compuestas son aquellas palabras que se forman a partir de la unión de dos o más palabras simples. '+
                    'Por ejemplo: girasol, atrapa sueños.',
                    header:'¿Qué son las palabras compuestas?',
                }).then(a => a.present());
            }
        },
    }
</script>

<style scoped>

</style>