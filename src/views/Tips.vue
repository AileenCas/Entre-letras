<template>
    <div id="app">
    <Toolbar/>
    <Menu/>
    <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
            <ion-card>
                <h2 class="Item" >¡Hola de nuevo!</h2>
                <p class="Item">Espero que te estés divirtiendo en este mágico mundo de la ortografía.</p>
                <img  class="icon" src="../assets/icon.png">
                <ion-card-header>
                    <ion-grid class="Grid" size="8">
                        <ion-row>Ha llegado el momento de que conozcas un pequeño rincón lleno de cosas nuevas que aprender.</ion-row>
                    </ion-grid>
                    <br>
                    <ion-grid class="Grid" size="8">
                        <ion-row>¿Te animas a descubrir las curiosidades que se esconden en las entrañas de nuestro idioma?</ion-row>
                    </ion-grid>
                </ion-card-header>
            </ion-card>
        </ion-slide>
        <ion-slide class="slide1">
        <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip1.png">
            <br>
            <img src="../assets/Tip2.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip3.png">
            <br>
            <img src="../assets/Tip4.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip5.png">
            <br>
            <img src="../assets/Tip6.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip7.png">
            <br>
            <img src="../assets/Tip8.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip9.png">
            <br>
            <img src="../assets/Tip10.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip11.png">
            <br>
            <img src="../assets/Tip12.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip13.png">
            <br>
            <img src="../assets/Tip14.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip15.png">
            <br>
            <img src="../assets/Tip16.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip17.png">
            <br>
            <img src="../assets/Tip18.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip19.png">
            <br>
            <img src="../assets/Tip20.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
        <img src="../assets/Tip21.png">
        <br>
        <img src="../assets/Tip22.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
        <img src="../assets/Tip23.png">
        <br>
        <img src="../assets/Tip24.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip25.png">
            <br>
            <img src="../assets/Tip26.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip27.png">
            <br>
            <img src="../assets/Tip28.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip29.png">
            <br>
            <img src="../assets/Tip30.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip31.png">
            <br>
            <img src="../assets/Tip32.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip33.png">
            <br>
            <img src="../assets/Tip34.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip35.png">
            <br>
            <img src="../assets/Tip36.png">
        </ion-slide>
        <ion-slide class="slide1">
            <h2>¿Sorpréndente?</h2>
            <img src="../assets/Tip37.png">
            <br>
            <img src="../assets/Tip38.png">
        </ion-slide>

    </ion-slides>
    </div>
</template>

<script>
    import Toolbar from "./Toolbar";
    import Menu from "./Menu";
    export default {
        name: "Tips",
        components: { Toolbar, Menu},
        data: () => {
            return {
                slideOpts: {
                    initialSlide: 2,
                    speed: 1000
                }
            }
        },
    }
</script>

<style scoped>


</style>