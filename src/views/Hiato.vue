<template>
    <ion-app>
    <ion-button color="#BDBDBD" @click="atras1()">
        <ion-icon name="arrow-back"></ion-icon>
    </ion-button>
        <h1>Hiato</h1>
        <p>El hiato se da cuando la acentuación de una palabra, o su pronunciación, obliga a separar en
            diferentes sílabas a un diptongo o un triptongo.</p>
        <p>  Existe hiato en una palabra en los siguientes casos:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <ion-card>
                    <ion-card-content class="cards2">
                        <h2> Hiato acentuado</h2>
                        <p>Cuando una vocal débil (i, u) está unida a una vocal fuerte (a, e, o) y la primera está acentuada. </p>
                        <img class="imgA" src="../assets/hia4.png">
                    </ion-card-content>
                </ion-card>
            </ion-slide>
                <ion-slide>
                <ion-card>
                    <ion-card-content class="cards2">
                        <h2> Hiato acentuado</h2>
                        <p>Cuando una vocal fuerte (a, e, o) está unida a una vocal débil (i, u) y la última está acentuada.</p>
                     <img src="../assets/hia5.png">
                    </ion-card-content>
                </ion-card>
            </ion-slide>
        </ion-slides>
        <ion-card>
        <h2>Hiato simple</h2>
        <p>Puede haber hiato en el caso de dos vocales fuertes (a, e, o) que se hallen unidas.</p>
        <p>(ae-, -ao-, -ea-, -eo-, -oa-,-oe-).</p>
        <img src="../assets/hia1.png">
        </ion-card>
        <ion-card>
        <h2>Hiato simple de dos vocales iguales</h2>
        <p>Cuando existen dos vocales iguales juntas, pero ninguna de ellas está acentuada. </p>
        <p>(-aa-, -ee-, -ii-, -oo-, -uu-).</p>
            <img src="../assets/hia2.png">
        </ion-card>
        <ion-card>
        <h2>  La “h” entre vocales</h2>
        <p> la “h” se encuentra entre dos vocales, ésta no interfiere en la formación de hiato.</p>
        <p>Ejemplo: "Al-co–hol".</p>
            <img src="../assets/hia3.png">
        </ion-card>
    </ion-app>
</template>

<script>
    export default {
        name: "Hiato",
        methods: {
            atras1: function () {

                this.$router.push({name: 'Temas'})
            },
        },
    }
</script>

<style scoped>

</style>