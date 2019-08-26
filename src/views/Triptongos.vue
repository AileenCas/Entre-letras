<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <ion-button  expand="full" class="btnD" @click="vocales()" > ¡Espera! </ion-button>
        <h1>Triptongos</h1>
        <p>El triptongo es la sucesión de tres vocales en una misma sílaba</p>
        <img src="../assets/trip1.png">
        <p>La vocal abierta es la que lleva el acento.</p>
        <h2>Ejemplos</h2>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <img  class="imgA" src="../assets/trip2.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/trip3.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/trip4.png">
            </ion-slide>
        </ion-slides>

    </div>
</template>

<script>
    export default {
        name: "Diptongo",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
            vocales() {
                return this.$ionic.alertController.create({
                    subHeader:'Vocales débiles = vocales cerradas (i, a).\n' +
                        'Vocales fuertes = vocales abiertas (a, e, o).',
                    header:'Antes de empezar esta lección, debes conocer algo importante.',
                }).then(a => a.present());
            },
        },
    }
</script>

<style scoped>

</style>