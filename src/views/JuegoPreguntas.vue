<template>
    <div id="app">
        <div v-for="respuesta in respuestas" v-show="respuesta.juego">
            <h2>{{respuesta.p}}</h2><br>
            <ion-list>
                <ion-radio-group>
                    <ion-radio type="text" style="display: none" id="posicion" :value="respuesta.i"></ion-radio>
                    <ion-item>
                        <ion-label for="op1">{{respuesta.r1}}</ion-label>
                        <ion-radio id="op1" type="radio" :value="respuesta.r1" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op2">{{respuesta.r2}}</ion-label>
                        <ion-radio id="op2" type="radio" :value="respuesta.r2" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op3">{{respuesta.r3}}</ion-label>
                        <ion-radio id="op3" type="radio" :value="respuesta.r3" name="op"></ion-radio>
                    </ion-item>
                    <ion-item>
                        <ion-label for="op2">{{respuesta.r4}}</ion-label>
                        <ion-radio id="op4" type="radio" :value="respuesta.r4" name="op"></ion-radio>
                    </ion-item>
                </ion-radio-group>
            </ion-list>
            <button id="BtnR" class="btn btn-outline-success btn-block " @click="jugar()">¡Enviar!</button>
            <button id="btn" class="btn btn-outline-primary btn-block " @click="formAgregar = !formAgregar">Agregar
                Pregunta
            </button>
        </div>
        <hr>
        <div v-show="formAgregar">
            <form v-on:submit.prevent="agregar">
                <label for="ap1">Pregunta</label>
                <input class="form-control" id="ap1" type="text" placeholder="Ingrese la pregunta:" name="op"
                       v-model="p"><br>
                <label for="ar1">Respuesta 1:</label>
                <input class="form-control" id="ar1" type="text" v-model="or1"><br>
                <label for="ar2">Respuesta 2:</label>
                <input class="form-control" id="ar2" type="text" name="op" v-model="or2"><br>
                <label for="ar3">Respuesta 3:</label>
                <input class="form-control" id="ar3" type="text" name="op" v-model="or3"><br>
                <label for="ar4">Respuesta 4:</label>
                <input class="form-control" id="ar4" type="text" name="op" v-model="or4"><br>
                <label for="arc">Respuesta Correcta:</label>
                <input class="form-control" id="arc" type="text" placeholder="Respuesta correcta" name="op"
                       v-model="orc"><br>
                <button class="btn btn-block btn-primary" @click="anterior">Añadir</button>
            </form>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
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
            }
        },
        mounted(){
            firebase.firestore().collection("Diptongo").doc("1").get().then(doc => {
              console.log(doc.data())
            });
        },
        methods: {
            jugar: function () {

               /* this.conteo = Number.parseInt(document.getElementById('posicion').value);
                let pos = document.getElementById('posicion').value;
                console.log(this.conteo);
                if (this.respuestas[pos].rc === this.op1) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op2) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op3) {
                    this.gano();
                } else if (this.respuestas[pos].rc === this.op4) {
                    this.gano();
                } else {
                    alert('¡Perdiste!');
                    this.op1 = '';
                    this.op2 = '';
                    this.op3 = '';
                    this.op4 = '';
                    this.perdio();
                }*/
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