<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
        <ion-card button="true" class="cards" @click="irA('Dia1')"><h2>¡Escoge!</h2></ion-card>
        <ion-card button="true" class="cards" @click="irA('Dia2')"><h2>¡Relaciona!</h2></ion-card>
        <ion-card button="true" class="cards" @click="irA('Dia3')"><h2>¡Arrastra!</h2></ion-card>
    </div>
</template>

<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    export default {
        name: "DiaR",
        components: {Toolbar, Menu},
        methods: {
            irA: function (nombre) {
                this.$router.push({
                    name: nombre
                })
            },
        },
    }
</script>

<style scoped>

</style>
