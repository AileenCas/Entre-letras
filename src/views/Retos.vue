<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
            <ion-card button="true" class="cards" @click="irA('AgudasR')">
                <img class="imgtemas" src="../assets/agudas.png">
            </ion-card>
            <ion-card button="true" class="cards" @click="irA('GravesR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/graves.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('EsdruR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/esdru.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('SobreR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/sobre.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('PuntoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/punto.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('DiptongoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/diptongo.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('TriptongosR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/triptongos.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('HiatoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/hiato.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('ComaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/coma.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('TildeR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/tilde.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('DiaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/dia.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('CompuestasR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/compu.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('ComillasR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/comillas.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('ExclamaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/exclamación.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('InteR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/inte.png">
                </ion-card-header>
            </ion-card>
        </div>
</template>
<script>
    import Toolbar from './Toolbar'
    import Menu from './Menu'

    export default {
        name: "retos",
        components: {Toolbar, Menu},
        methods: {
            irA: function (nombre) {
                this.$router.push({
                    name: nombre
                })
            },
        },
        mounted() {
            document.body.style.background = "#0d47a1";
        }
    }
</script>

<style scoped>
    @import "../assets/styles.css";
</style>