<template >
    <div id="app"  >
        <ion-nav>
            <ion-button color="#BDBDBD" @click="atras()"> <ion-icon  name="arrow-back"></ion-icon></ion-button>
            <ion-searchbar showCancelButton="always"></ion-searchbar>
            <ion-button class="btnt" expand="full">  Palabras agudas.</ion-button>
            <ion-button class="btnt" expand="full"> Palabras graves.</ion-button>
            <ion-button class="btnt" expand="full"> Palabras esdrújulas.</ion-button>
            <ion-button expand="full" class="btnt">  Palabras sobresdrújulas.</ion-button>
            <ion-button expand="full" class="btnt"> Uso del punto.</ion-button>
            <ion-button expand="full" class="btnt">Diptongo, triptongo y hiato.</ion-button>
            <ion-button expand="full" class="btnt"> Uso de la coma.</ion-button>
            <ion-button expand="full" class="btnt">La tilde diacrítica.</ion-button>
            <ion-button expand="full" class="btnt">Tilde en palabras compuestas.</ion-button>
            <ion-button expand="full" class="btnt">Uso de comillas.</ion-button>
            <ion-button expand="full" class="btnt">Signos de exclamación.</ion-button>
            <ion-button expand="full" class="btnt">Signos de exclamación.</ion-button>
            <ion-button expand="full" class="btnt">Signos de interrogación.</ion-button>
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