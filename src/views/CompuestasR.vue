<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
        <img  CLASS="icon" src="../assets/lupito-t.png" >
        <ion-button expand="full"   class="btnD" @click="Horro()">¡Alto Ahí!</ion-button>
        <ion-card button="true" class="card" @click="irA('Compuestas1')"><h2>¡Escoge!</h2></ion-card>
        <ion-card button="true" class="card" @click="irA('Compuestas2')"><h2>¡Arrastra!</h2></ion-card>
    </div>
</template>

<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    export default {
        name: "CompuestasR",
        components: {Toolbar, Menu},
        methods: {
            irA: function (nombre) {
                this.$router.push({
                    name: nombre
                })
            },
            Horro(){
                return this.$ionic.alertController.create({
                    header: '¡Hola novato! ¿Me recuerdas? Es hora de poner a prueba tus conocimientos.',
                    subHeader:'¡Suerte al intentar vencerme!'
                }).then(a => a.present());
            },
        },
    }
</script>

<style scoped>

</style>