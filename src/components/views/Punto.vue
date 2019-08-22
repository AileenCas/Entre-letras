<template>
    <div id="app">
        <div>
            <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
            <h1>Uso del punto </h1>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Punto",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>