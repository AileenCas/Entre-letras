<template>
    <div>
        <Toolbar/>
        <Menu/>
      <h2>¿Quieres conocernos?</h2>
        <img  class="re" src="../assets/icon-1.png" >
        <h4 class="per"> ¡Hola! En este espacio podrás conocer a los creadores de éste mágico e inusual mundo de la ortografía.
            ¡Echa un vistazo, amigo!</h4>
        <ion-card><img src="../assets/P4.jpg" class="re">  <ion-button expand="full">Aileen Castro.</ion-button></ion-card>
        <ion-card><img src="../assets/P3.jpeg.jpg" class="re">  <ion-button expand="full">Keimmy García.</ion-button></ion-card>
        <ion-card><img src="../assets/P4.jpg" class="re">  <ion-button expand="full">Kevin Padilla.</ion-button></ion-card>
        <ion-card><img src="../assets/P3.jpeg.jpg" class="re">  <ion-button expand="full">Lina Morón.</ion-button></ion-card>
        <ion-card><img src="../assets/P3.jpeg.jpg" class="re">  <ion-button expand="full">Valentina García.</ion-button></ion-card>

    </div>
</template>

<script>
    import Toolbar from "./Toolbar";
    import Menu from "./Menu";
    export default {
        name: "Perfiles",
        components: {Toolbar,Menu},

        }

</script>

<style scoped>

</style>