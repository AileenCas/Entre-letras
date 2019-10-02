<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
        <ion-card button="true" class="cards" @click="irA('Diptongo1')"><h2>¡Escoge!</h2></ion-card>
        <ion-card button="true" class="cards" @click="irA('Diptongo2')"><h2>¡Relaciona!</h2></ion-card>
        <ion-card button="true" class="cards" @click="irA('Diptongo3')"><h2>¡Arrastra!</h2></ion-card>
    </div>
</template>

<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    export default {
        name: "DiptongoR",
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
