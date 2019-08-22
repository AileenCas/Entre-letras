<template>
    <div id="app">
        <div v-for="respuesta, index in respuestas" v-if="respuesta.juego">
            <h2>{{respuesta.p}}</h2><br>
            <ion-list>
                <ion-radio-group>
                    <ion-item>
                        <ion-label for="op1">{{respuesta.r1}}</ion-label>
                        <ion-radio style="display: none" slot="start" id="posicion" :value="index" checked></ion-radio>
                        <ion-radio id="op1" type="radio" :value="respuesta.r1" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op2">{{respuesta.r2}}</ion-label>
                        <ion-radio style="display: none" slot="start" id="posicion" :value="index" checked></ion-radio>
                        <ion-radio id="op2" type="radio" :value="respuesta.r2" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op3">{{respuesta.r3}}</ion-label>
                        <ion-radio style="display: none" slot="start" id="posicion" :value="index" checked></ion-radio>
                        <ion-radio id="op3" type="radio" :value="respuesta.r2" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op2">{{respuesta.r4}}</ion-label>
                        <ion-radio style="display: none" slot="start" id="posicion" :value="index" checked></ion-radio>
                        <ion-radio id="op4" type="radio" :value="respuesta.r4" name="op"></ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>
            <button class="btn btn-outline-success btn-block " @click="jugar">¡Enviar!</button>
            <button class="btn btn-outline-primary btn-block " @click="formAgregar = !formAgregar">Agregar Pregunta</button>
        </div>
        <hr>
        <div v-show="formAgregar">
            <form v-on:submit.prevent="agregar">
                <label for="ap1">Pregunta</label>
                <input class="form-control" id="ap1" type="text" placeholder="Ingrese la pregunta:" name="op" v-model="p"><br>
                <label for="ar1">Respuesta 1:</label>
                <input class="form-control" id="ar1" type="text"  v-model="or1"><br>
                <label for="ar2">Respuesta 2:</label>
                <input class="form-control" id="ar2" type="text" name="op" v-model="or2"><br>
                <label for="ar3">Respuesta 3:</label>
                <input class="form-control" id="ar3" type="text"  name="op" v-model="or3"><br>
                <label for="ar4">Respuesta 4:</label>
                <input class="form-control" id="ar4" type="text"  name="op" v-model="or4"><br>
                <label for="arc">Respuesta Correcta:</label>
                <input class="form-control" id="arc" type="text" placeholder="Respuesta correcta" name="op" v-model="orc"><br>
                <button class="btn btn-block btn-primary" @click="anterior">Añadir</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JuegoPreguntas",
        data() {
            return {
                op1: '',
                op2: '',
                op3: '',
                op4: '',
                p: '',
                or1: '',
                or2: '',
                or3: '',
                or4: '',
                orc: '',
                formAgregar: false,
                puntaje: 0,
                conteo: 0,
                respuestas: [
                    {juego: true, p: "¿Cuanto es 2 + 2?", rc: '4', r1: '4', r2: '6', r3: '8', r4: '9'},
                    {juego: false, p: "¿Cuanto es 4*4?", rc: '16', r1: '24', r2: '11', r3: '7', r4: '16'},
                    {
                        juego: false,
                        p: "¿De que color es el caballo blanco de Simon bolivar?",
                        rc: 'Blanco',
                        r1: 'Azul',
                        r2: 'Verde',
                        r3: 'Blanco',
                        r4: 'Rojo'
                    }
                ]
            }
        },
        methods: {
            jugar: function () {
                this.conteo = Number.parseInt(document.getElementById('posicion').value);
                let pos = document.getElementById('posicion').value;
                if (this.respuestas[pos].rc === this.op1) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op2) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op3) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op4) {
                    this.gano();
                } else {
                    alert('¡Fallaste!');
                    this.op1 = '';
                    this.op2 = '';
                    this.op3 = '';
                    this.op4 = '';
                    this.perdio();
                }
            },
            anterior: function () {
                if (this.respuestas[this.conteo - 1] != null) {
                    this.respuestas[this.conteo].juego = false;
                    this.respuestas[this.conteo - 1].juego = true;
                }
            },
            siguiente: function () {
                alert('siguiente')
            },
            gano: function () {
                alert('¡Ganaste!');
                this.puntaje++;
                this.op1 = '';
                this.op2 = '';
                this.op3 = '';
                this.op4 = '';
                this.respuestas[this.conteo].juego = false;
                if (this.respuestas[this.conteo + 1] != null) {
                    this.respuestas[this.conteo + 1].juego = true;
                } else {
                    console.log('Ya acabaste esta, tu puntaje es de: ' + this.puntaje);
                }
            },
            perdio: function () {
                this.respuestas[this.conteo].juego = false;
                if (this.respuestas[this.conteo + 1] != null) {
                    this.respuestas[this.conteo + 1].juego = true;
                }
            },
            agregar: function () {
                this.respuestas.push({
                    juego: false,
                    p: this.p,
                    rc: this.orc,
                    r1: this.or1,
                    r2: this.or2,
                    r3: this.or3,
                    r4: this.or4
                })
            }
        }
    }
</script>

<style scoped>

</style>