<template>
    <div id="app" :key="componentKey">
        <Toolbar/>
        <Menu/>
        <p>{{p}}</p><br>
        <ion-radio-group>
            <ion-radio type="text" style="display: none" id="posicion"></ion-radio>
            <ion-button shape="round" expand="full" class="Juego">
                <ion-label for="1">{{op1}}</ion-label>
                <ion-radio id="1" type="radio" :value="op1" name="op"></ion-radio>
            </ion-button>
            <ion-button shape="round" expand="full" class="Juego">
                <ion-label for="2">{{op2}}</ion-label>
                <ion-radio id="2" type="radio" :value="op2" name="op"></ion-radio>
            </ion-button>
            <ion-button  shape="round" expand="full" class="Juego">
                <ion-label for="3">{{op3}}</ion-label>
                <ion-radio id="3" type="radio" :value="op3" name="op"></ion-radio>
            </ion-button>
            <ion-button shape="round" expand="full" class="Juego">
                <ion-label for="4">{{op4}}</ion-label>
                <ion-radio id="4" type="radio" :value="op4" name="op"></ion-radio>
            </ion-button>
        </ion-radio-group>
        <ion-button id="BtnR" class="btn btn-outline-success btn-block " @click="jugar()">¡Enviar!</ion-button>
        <hr>
        <span>Tu puntaje actual es de: {{puntaje}}</span>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import Toolbar from './Toolbar'
    import Menu from './Menu'
    import calculo from "../calculoPuntoEXP"
    export default {
        name: "Inte2",
        components:{
            Toolbar, Menu
        },
        data() {
            return {
                op1: '',
                op2: '',
                op3: '',
                op4: '',
                p: '',
                rc: '',
                componentKey: 0,
                number: 1,
                formAgregar: false,
                puntaje: 0,
                conteo: 0,
                exp: 0,
                nivel:0
            }
        },
        mounted() {
            firebase.firestore().collection("SignosdeInterrogación2").doc(this.number.toString(10)).get().then(doc => {
                this.p = doc.data().p;
                this.op1 = doc.data().r1;
                this.op2 = doc.data().r2;
                this.op3 = doc.data().r3;
                this.op4 = doc.data().r4;
            });
            firebase.firestore().collection("usuarios").doc(firebase.auth().currentUser.email).get().then(doc =>{
                this.exp = doc.data().exp;
                this.nivel = doc.data().nivel
            })
        },
        methods: {
            jugar: function () {
                for (let i = 1; i <= 4; i++) {
                    let aux = document.getElementById(i.toString(10));
                    if (aux.checked) {
                        this.rc = aux.value;
                    }
                }
                firebase.firestore().collection("SignosdeInterrogación2").doc(this.number.toString(10)).get().then(doc => {
                    if (doc.data().rc === this.rc) {
                        this.gano();
                        this.mostrarToast("¡Muy bien, has sumado un punto!");
                        this.puntaje++;
                        this.componentKey += 1;
                        //this.$forceUpdate();
                    }else{
                        this.gano();
                        this.mostrarToast("Fallaste, sigue intentando :(");
                    }
                });
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
                this.number++;
                this.op1 = '';
                this.op2 = '';
                this.op3 = '';
                this.op4 = '';
                this.p = '';
                firebase.firestore().collection("SignosdeInterrogación2").doc(this.number.toString(10)).get().then(doc => {
                    if (typeof (doc.data()) !== "undefined") {
                        this.p = doc.data().p;
                        this.op1 = doc.data().r1;
                        this.op2 = doc.data().r2;
                        this.op3 = doc.data().r3;
                        this.op4 = doc.data().r4;
                    } else {
                        this.number=1;
                        firebase.firestore().collection("SignosdeInterrogación2").doc("1").get().then(doc => {
                            this.p = doc.data().p;
                            this.op1 = doc.data().r1;
                            this.op2 = doc.data().r2;
                            this.op3 = doc.data().r3;
                            this.op4 = doc.data().r4;
                        });
                        calculo(this.puntaje, firebase.auth().currentUser.email, this.exp,this.nivel);
                        firebase.firestore().collection("usuarios").doc(firebase.auth().currentUser.email).get().then(doc =>{
                            this.exp = doc.data().exp;
                            this.nivel = doc.data().nivel
                        });
                        this.componentKey += 1;
                        this.mostrarToast("Terminaste el juego, tu puntaje fue de: " + this.puntaje);
                        this.puntaje=0;
                    }

                });
                /* this.respuestas[this.conteo].juego = false;
                 if (this.respuestas[this.conteo + 1] != null) {
                     this.respuestas[this.conteo + 1].juego = true;
                 } else {
                     console.log('Ya acabaste esta, tu puntaje es de: ' + this.puntaje);
                 }*/
            },
            mostrarToast: async function(mensaje){
                const toast = await this.$ionic.toastController.create({
                    message: mensaje,
                    duration: 3000,
                    position: "bottom"
                });
                await toast.present();
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