<template>
    <ion-app>
        <Menu/>
        <Toolbar/>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <h1>Slide 1</h1>
                <img src="../assets/lupita-t.png">
            </ion-slide>
            <ion-slide>
                <h1>Slide 2</h1>
            </ion-slide>
            <ion-slide>
                <h1>Slide 3</h1>
            </ion-slide>
        </ion-slides>
    </ion-app>
</template>

<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    export default {
        name: "Comparte",
        components:{
            Toolbar, Menu
        }
    }
</script>

<style scoped>

</style>