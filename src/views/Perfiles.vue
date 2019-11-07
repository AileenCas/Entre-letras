<template>
    <div>
        <Toolbar/>
        <Menu/>
      <h2>¿Quieres conocernos?</h2>
        <img  class="re" src="../assets/icon-1.png" >
        <h4 class="per"> ¡Hola! En este espacio podrás conocer a los creadores de éste mágico e inusual mundo de la ortografía.
            ¡Echa un vistazo, amigo!</h4>
        <ion-card><img src="../assets/P1.png" class="re1">  <ion-item class="i" >Aileen Castro.</ion-item></ion-card>
        <ion-card><img src="../assets/P2.png" class="re1">  <ion-item class="i">Keimmy García.</ion-item></ion-card>
        <ion-card><img src="../assets/P4.png" class="re1">  <ion-item class="i">Kevin Padilla.</ion-item></ion-card>
        <ion-card><img src="../assets/P5.png" class="re1">  <ion-item class="i">Lina Morón.</ion-item></ion-card>
        <ion-card><img src="../assets/P3.jpeg.jpg" class="re1"><ion-item class="i">Valentina García.</ion-item></ion-card>
        <h5>Copyright © 2019 | Entre letras</h5>
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