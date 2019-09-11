<template>
    <div id="app">
        <Menu/>
        <Toolbar/>
            <ion-card button="true" class="cards" @click="ira('AgudasR')">
                <img class="imgtemas" src="../assets/agudas.png">
            </ion-card>
            <ion-card button="true" class="cards" @click="ira('GravesR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/graves.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('EsdruR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/esdru.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('SobreR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/sobre.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('PuntoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/punto.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('DiptongoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/diptongo.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('TriptongosR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/triptongos.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('HiatoR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/hiato.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('ComaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/coma.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('TildeR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/tilde.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('DiaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/dia.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('CompuestasR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/compu.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('ComillasR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/comillas.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('ExclamaR')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/exclamación.png">
                </ion-card-header>
            </ion-card>

            <ion-card button="true" class="cards" @click="ira('InteR')">
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
            ira: function (nombre) {
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