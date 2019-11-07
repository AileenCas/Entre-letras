<template>
    <div>
        <Toolbar/>
        <Menu/>
      <h2>¿Quieres conocernos?</h2>
        <img  class="re" src="../assets/icon-1.png" >
        <ion-item>¡Hola! En este espacio podrás conocer a los creadores de éste mágico e inusual mundo de la ortografía.
            ¡Echa un vistazo, amigo!</ion-item>
        <ion-card><img src="../assets/P3.jpeg" class="re"></ion-card>


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