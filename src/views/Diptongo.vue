<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Diptongo </h1>
        <p> El diptongo es la combinación de dos vocales en una sílaba dentro de una palabra. </p>
        <p> Los tipos de diptongo pueden ser:</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <ion-card>
                    <ion-card-header>
                        <h2>Diptongo Homogéneo</h2>
                    </ion-card-header>
                    <ion-card-content class="cards2">
                        <p>Formado por dos vocales débiles o cerradas.</p>
                    </ion-card-content>
                </ion-card>
            </ion-slide>
            <ion-slide>
                <ion-card>
                    <ion-card-header>
                        <h2>Diptongo creciente</h2>
                    </ion-card-header>
                    <ion-card-content class="cards2">
                        <p>Formado por una vocal débil y una fuerte.</p>
                    </ion-card-content>
                </ion-card>
            </ion-slide>
            <ion-slide>
                <ion-card>
                    <ion-card-header>
                        <h2>Diptongo decreciente</h2>
                    </ion-card-header>
                    <ion-card-content class="cards2">
                        <p>Formado por una vocal fuerte y una débil.</p>
                    </ion-card-content>
                </ion-card>
            </ion-slide>
        </ion-slides>
        <h2>Ejemplos:</h2>
        <ion-card>
            <ion-card-header>
                <h2>UI</h2>
            </ion-card-header>
            <ion-card-content class="cards2">
                <ion-slides pager="true" :options="slideOpts">
                    <ion-slide>
                        <img  class="imgA" src="../assets/IU1.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/iu2.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/ui3.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/ui4.png">
                    </ion-slide>
                </ion-slides>
            </ion-card-content>
        </ion-card>
    <ion-card>
            <ion-card-header>
                <h2>UI</h2>
            </ion-card-header>
            <ion-card-content class="cards2">
                <ion-slides pager="true" :options="slideOpts">
                    <ion-slide>
                        <img  class="imgA" src="../assets/ai1.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/ai2.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/ai4.png">
                    </ion-slide>
                    <ion-slide>
                        <img  class="imgA" src="../assets/ai5.png">
                    </ion-slide>
                </ion-slides>
            </ion-card-content>
        </ion-card>
        <ion-card>
        <ion-card-header>
            <h2>AU</h2>
        </ion-card-header>
        <ion-card-content class="cards2">
            <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                    <img  class="imgA" src="../assets/au1.png">
                </ion-slide>
                <ion-slide>
                    <img  class="imgA" src="../assets/au2.png">
                </ion-slide>
                <ion-slide>
                    <img  class="imgA" src="../assets/au4.png">
                </ion-slide>
            </ion-slides>
        </ion-card-content>
        </ion-card>
    <ion-card>
        <ion-card-header>
            <h2>EI</h2>
        </ion-card-header>
        <ion-card-content class="cards2">
            <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                    <img  class="imgA" src="../assets/ei1.png">
                </ion-slide>
                <ion-slide>
                    <img  class="imgA" src="../assets/ei2.png">
                </ion-slide>
                <ion-slide>
                    <img  class="imgA" src="../assets/ei3.png">
                </ion-slide>
            </ion-slides>
        </ion-card-content>
    </ion-card>
    </div>
    </template>
<script>
    export default {
        name: "Diptongo",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
            vocales() {
                return this.$ionic.alertController.create({
                    header: 'Antes de empezar esta lección, debes conocer algo importante.' +
                        'Vocales débiles = vocales cerradas (i, a)\n' +
                        'Vocales fuertes = vocales abiertas (a, e, o)\n'
                }).then(a => a.present());
            },
        },
    }

</script>

<style scoped>

</style>

