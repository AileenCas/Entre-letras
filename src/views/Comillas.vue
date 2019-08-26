<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Uso de las comillas</h1>
        <p>Las comillas son signos tipográficos utilizados para marcar niveles distintos en una oración.</p>
        <img src="../assets/comillas1.png">
        <p>  Generalmente se utilizan:</p>
        <ion-slides pager="true" :options="slideOpts">
          <ion-slide><p>•	Para citar textualmente algo que ocupe menos de tres o cuatro renglones.</p></ion-slide>
          <ion-slide> <p>•	Para señalar palabras usadas en un sentido distinto del normal, con el fin de indicar que se han utilizado intencionalmente y no por error.</p></ion-slide>
          <ion-slide><p>•	Para indicar la intención irónica del empleo de una palabra.</p></ion-slide>
          <ion-slide><p>•	En un título en cursiva, para reemplazar el tipo de letra cursiva con el que se indica el nombre de una obra artística: Análisis del «Quijote».</p></ion-slide>
           <ion-slide><p>•	Para presentar el significado de una palabra o expresión. En este caso se utilizan exclusivamente las comillas simples: «acechador». </p></ion-slide>
            <ion-slide> <p>•	Para indicar los pensamientos de un personaje en textos narrativos.</p></ion-slide>
        </ion-slides>
    </div>
</template>

<script>
    export default {
        name: "Comillas",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
    },
    }
</script>

<style scoped>

</style>