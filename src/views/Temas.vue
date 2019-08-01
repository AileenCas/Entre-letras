<template>
    <div id="app">
        <ion-nav>
            <ion-button color="#BDBDBD" @click="atras()"> <ion-icon  name="arrow-back"></ion-icon></ion-button>
            <ion-searchbar showCancelButton="always"></ion-searchbar>
            <ion-list >
                <ion-item>
                    <ion-label>Palabras agudas, graves y esdrújulas y sobresdrújulas.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Uso del punto.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>  Diptongo, triptongo y hiato. </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>   Uso de la coma.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>La tilde diacrítica.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Tilde en palabras compuestas.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Uso de comillas.</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Signos de exclamación. </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Signos de interrogación.</ion-label>
                </ion-item>
            </ion-list>


        </ion-nav>


    </div>
</template>

<script>

    export default {
        name: "Temas",
        methods: {
          atras:function () {
              this.$ionic.navController.pop()
          }
                }
            }



</script>

<style scoped>
    @import "../assets/styles.css";
</style>