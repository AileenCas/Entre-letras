<template>
    <div id="app" class="Temas">
        <Menu/>
        <Toolbar/>
        <H1>Temas</H1>
            <ion-card button="true" class="cards" @click="irA('Agudas')">
                <img class="imgtemas" src="../assets/agudas.png">
                <ion-card-content>
                    Las palabras agudas son las que llevan acento en la última sílaba.
                </ion-card-content>
            </ion-card>
            <ion-card button="true" class="cards" @click="irA('Graves')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/graves.png">
                </ion-card-header>
                <ion-card-content>
                    Las palabras graves son la que llevan la intensidad de la voz en la penúltima sílaba.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Esdru')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/esdru.png">
                </ion-card-header>
                <ion-card-content>
                    Las palabras esdrújulas son las que llevan la intensidad de la voz en la antepenúltima sílaba.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Sobre')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/sobre.png">
                </ion-card-header>
                <ion-card-content>
                    Las palabras sobresdrújulas son las que llevan la intensidad de la voz en la sílaba anterior a la
                    antepenúltima sílaba.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Punto')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/punto.png">
                </ion-card-header>
                <ion-card-content>
                    El punto como signo de puntuación se utiliza para señalar pautas largas o cortas así como el final
                    de una oración o párrafo.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Diptongo')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/diptongo.png">
                </ion-card-header>
                <ion-card-content>
                    El diptongo es la combinación de dos vocales en una sílaba dentro de una palabra.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Triptongos')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/triptongos.png">
                </ion-card-header>
                <ion-card-content>
                    El triptongo es la sucesión de tres vocales en una misma sílaba: vocal cerrada (u/i) + vocal abierta
                    tónica (a/e/o) + vocal cerrada (u/).
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Hiato')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/hiato.png">
                </ion-card-header>
                <ion-card-content>
                    El hiato se da cuando la acentuación de una palabra, o su pronunciación, obliga a separar en
                    diferentes sílabas a un diptongo o un triptongo.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Coma')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/coma.png">
                </ion-card-header>
                <ion-card-content>
                    La coma es un signo de puntuación que representa una pausa más breve que la del punto y se utiliza
                    con frecuencia en toda clase de textos.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Tilde')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/tilde.png">
                </ion-card-header>
                <ion-card-content>
                    Las tildes son signos gráficos para marcar acentos. En español existe solo un tipo de tilde al
                    escribirla, y solo se hará sobre las vocales.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Dia')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/dia.png">
                </ion-card-header>
                <ion-card-content>
                    La tilde diácritica se usa para diferenciar palabras que se escriben igual pero significan cosas
                    distintas.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Compuestas')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/compu.png">
                </ion-card-header>
                <ion-card-content>
                    Las palabras compuestas son aquellas palabras que se forman a partir de la unión de dos o más
                    palabras simples.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Comillas')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/comillas.png">
                </ion-card-header>
                <ion-card-content>
                    Las comillas son signos tipográficos utilizados para marcar niveles distintos en una oración.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Exclama')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/exclamación.png">
                </ion-card-header>
                <ion-card-content>
                    Los signos de exclamación son signos ortográficos dobles utilizados para expresar enunciados
                    cargados de emoción.
                </ion-card-content>
            </ion-card>

            <ion-card button="true" class="cards" @click="irA('Inte')">
                <ion-card-header>
                    <img class="imgtemas" src="../assets/inte.png">
                </ion-card-header>
                <ion-card-content>
                    Los signos de interrogación son signos ortográficos dobles que se utilizan para indicar que un
                    enunciado se transforma en una pregunta.
                    Interrogar, significa, precisamente, preguntar o inquirir.
                </ion-card-content>
            </ion-card>
        </div>
</template>
<script>

    import Toolbar from './Toolbar'
    import Menu from './Menu'

    export default {
        name: "Temas",
        components: {
            Toolbar, Menu
        },
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