<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Tilde diacrítica</h1>
        <p>El acento diacrítico es el que se emplea para distinguir los significados de palabras,
        frecuentemente monosílabas, de las cuales unas son regularmente tónicas, mientras que las otras son átonas en el habla. </p>
    <img src="../assets/dia1.png">
        <h2>Interrogativos o exclamativos </h2>
        <p>En casos de interrogación y exclamación llevan tildes las palabras como: </p>
       <ion-slides pager="true" :options="slideOpts">
       <ion-slide> <img src="../assets/dia2.png"></ion-slide>
        <ion-slide><img src="../assets/dia3.png"></ion-slide>
       </ion-slides>
    </div>
    
</template>

<script>
    export default {
        name: "Dia",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
        },
    }
</script>

<style scoped>

</style>