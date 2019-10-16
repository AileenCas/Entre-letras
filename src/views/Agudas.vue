<template>
    <ion-app>
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Palabras agudas </h1>
            <p>Las palabras agudas son las que llevan acento en la última sílaba. </p>
                <p>Las palabras agudas llevan tilde si terminan en vocal: </p>
          <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                 <img  class="imgA" src="../assets/aguda2.png">
            </ion-slide>
              <ion-slide>
              <img  class="imgA" src="../assets/aguda5.png">
              </ion-slide>
              <ion-slide>
                 <img  class="imgA" src="../assets/aguda6.png">
              </ion-slide>
              <ion-slide>
                  <img  class="imgA" src="../assets/aguda7.png">
              </ion-slide>
        </ion-slides>
                <p>  Las palabras agudas llevan tilde si terminan en N o S:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h1>También</h1></ion-slide>
            <ion-slide><h1>Jamás</h1></ion-slide>
            <ion-slide><h1>Además</h1></ion-slide>
            <ion-slide><h1>Según</h1></ion-slide>
            <ion-slide><h1>Organización</h1></ion-slide>
            <ion-slide><h1>Canción</h1></ion-slide>
            <ion-slide><h1>Anís</h1></ion-slide>
            <ion-slide><h1>Alemán</h1></ion-slide>
            <ion-slide><h1>Sillón</h1></ion-slide>
        </ion-slides>
                <p>   Hay palabras agudas que tienen tilde a pesar de NO terminar en vocal, N o S. Esto es por la ruptura del diptongo:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <img  class="imgA" src="../assets/aguda8.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/aguda9.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/aguda1.png">
            </ion-slide>
            <ion-slide>
                <img  class="imgA" src="../assets/aguda3.png">
            </ion-slide>
        </ion-slides>

    </ion-app>

</template>


<script>
    export default {
        name: "Agudas",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>