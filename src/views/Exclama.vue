<template>
    <ion-app>
    <ion-button color="#BDBDBD" @click="atras1()">
        <ion-icon name="arrow-back"></ion-icon>
    </ion-button>
        <h1>Singnos de exclamación</h1>
        <ion-card class="cards"><img src="../assets/exclamación.png"></ion-card>
        <p>Los signos de exclamación son signos ortográficos dobles utilizados para expresar enunciados cargados de emoción.</p>
        <p>Ejemplos:</p>
        <img src="../assets/excla1.png">
        <ion-slides pager="true" :options="slideOpts">
                <ion-slide><h1>¡Hola!</h1></ion-slide>
                <ion-slide><h1> ¡Auch!</h1></ion-slide>
                <ion-slide><h1>¡Feliz cumpleaños!</h1></ion-slide>
                <ion-slide><h1>¡Es perfecto! </h1></ion-slide>
                <ion-slide><h1>¡Silencio!</h1></ion-slide>
                <ion-slide><h1>¡A trabajar! </h1></ion-slide>
        </ion-slides>
        <h2>Varios signos de exclamación </h2>
       <p> En otros casos, cuando se quiere resaltar aún más la carga emotiva de la expresión,
           se pueden usar hasta tres signos de exclamación seguidos, tres de apertura y tres de cierre. </p>
        <p>Ejemplo:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h1>¡¡¡Auxilio!!!</h1></ion-slide>
            <ion-slide><h1> ¡¡¡Qué maravilla!!!</h1></ion-slide>
            <ion-slide><h1>¡¡¡Sorpresa!!!</h1></ion-slide>
            <ion-slide><h1>¡¡¡Esto es un desastre!!! </h1></ion-slide>
        </ion-slides>
    </ion-app>

</template>

<script>
    export default {
        name: "Exclama",
        methods:{
        atras1: function () {
            this.$router.push({name: 'Temas'})
        },
    },
    }
</script>

<style scoped>

</style>