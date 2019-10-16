<template>
    <ion-app>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide class="slide1">
                <h1>Entre letras</h1>
                <img class="logo" src="../assets/icon-1.png">
                <p>
                    "La pluma es más poderosa que la espada solo si el cerebro que la guía sabe empuñar la
                    palabra."</p>
                    <p> -Tony Buzan.</p>
            </ion-slide>
            <ion-slide class="slide1">

                <h2>¿Quieres conocer a tu guía?</h2>
                <img src="../assets/lupita-t.png" class="img2">
                <ion-button expand="full" class="btn2" @click="alert2"> ¡Oh! tú debes ser el nuevo participante.
                </ion-button>
            </ion-slide>

            <ion-slide class="slide1">
                <h2>¡Vamos, quiero conocerte!</h2>
                <img class="img2" src="../assets/lupito-t.png">
                <div class="cont">
                    Soy Horrógrafo, de seguro me verás muy seguido por
                    aquí, novicio. A menos que seas realmente bueno.
                    Jamás he perdido en este juego.
                    ¿Te atreves a ser el primero en vencerme?
                </div>
                <ion-button expand="full" class="btn1" @click="presentActionSheet"> Aceptar el reto </ion-button>

            </ion-slide>
        </ion-slides>
    </ion-app>
</template>
<script>
    import firebase from 'firebase'
    import router from '../router'

    var firebaseConfig = {
        apiKey: "AIzaSyB0hnZuDfSfpxPj86H-drZRSCBz-bm0oAQ",
        authDomain: "entreletras-841ff.firebaseapp.com",
        databaseURL: "https://entreletras-841ff.firebaseio.com",
        projectId: "entreletras-841ff",
        storageBucket: "entreletras-841ff.appspot.com",
        messagingSenderId: "792002298661",
        appId: "1:792002298661:web:09bb399b36b44990"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default {
        props: {
            timeout: {type: Number, default: 5000},
        },
        data: () => {
            return {
                slideOpts: {
                    initialSlide: 2,
                    speed: 1000
                }
            }
        },
        methods: {
            presentLoading(mensaje) {
                return this.$ionic.loadingController
                    .create({
                        message: mensaje,
                        duration: this.timeout,
                    })
                    .then(l => {
                        setTimeout(function () {
                            l.dismiss()
                        }, this.timeout);
                        return l.present()
                    })
            },
            alerta: function () {
                return this.$ionic.alertController.create({
                    header: 'Regístrate',
                    inputs: [{type: "text", id: 'nombre', placeholder: "Ingresa tu nombre"},
                        {type: "text", placeholder: "Correo electrónico", id: 'email'},
                        {type: "password", placeholder: "Ingresa tu contraseña", id: 'pass'}],
                    buttons: [
                        {
                            text: '¿Quieres continuar?',
                            handler: () => {
                                let email = document.getElementById('email').value,
                                    pass = document.getElementById('pass').value,
                                    nombre = document.getElementById('nombre').value;
                                firebase.auth().signOut().then();
                                firebase.auth().createUserWithEmailAndPassword(email, pass).then();
                                this.resentLoading('Registrando su cuenta, por favor, espere un momento...');
                                setTimeout(function () {
                                    firebase.auth().signInWithEmailAndPassword(email, pass).then();
                                    firebase.auth().currentUser.updateProfile({
                                        displayName: nombre
                                    }).then();
                                    router.push({
                                        name: 'TableroPrincipal'
                                    })
                                }, 5000);
                            },
                        },
                        'Cancelar']

                }).then(a => a.present());
            },
            alert1() {
                return this.$ionic.alertController.create({
                    header: 'Iniciar sesión',
                    inputs: [{type: "text", placeholder: "Correo electrónico", id: 'nombre'}, {
                        type: "password", placeholder: "Ingresa tu contraseña", id: 'password'
                    }],
                    buttons: [
                        {
                            text: '¡A la carga!',
                            handler: () => {
                                let nombre = document.getElementById('nombre').value,
                                    pass = document.getElementById('password').value;
                                firebase.auth().signInWithEmailAndPassword(nombre, pass).then();
                                this.presentLoading('Cargando, por favor espere un momento...');
                                setTimeout(()=>{
                                    this.$router.push({
                                        name: 'TableroPrincipal'
                                    })
                                }, 3000)
                            },
                        },
                        'Cancelar']
                }).then(a => a.present());
            },
            alert3: function () {
                return this.$ionic.alertController.create({
                    header: 'Aprende con tus amigos',
                        buttons: [
                            {text: 'Gmail',
                            icon: 'mail',
                            handler: () => {
                                console.log('mail')
                            },
                        },
                    ],
                }).then(a => a.present())

            },
            presentActionSheet() {
                return this.$ionic.actionSheetController
                    .create({
                        header: '¡Bienvenido!',
                        buttons: [
                            {
                                text: '¿Quieres Regístrate?',
                                role: 'destructive',
                                icon: 'person',
                                handler: () => {
                                    this.alerta();
                                },
                            },
                            {
                                text: 'Iniciar sesión',
                                icon: 'arrow-dropright-circle',
                                handler: () => {
                                    this.alert1();
                                },
                            },
                            {
                                text: '¡Aprende con tus amigos!',
                                icon: 'share',
                                handler: () => {
                                  this.alert3();
                                },
                            },
                            {
                                text: 'Salir',
                                icon: 'power',
                                role: 'cancel',
                                handler: () => {
                                    console.log('Cancel clicked')
                                },
                            },
                        ],
                    })
                    .then(a => a.present())
            },


            alert2() {
                return this.$ionic.alertController.create({
                    header: '¡Hola! Soy Hedwig, la lechuza de la ortografía.\n' +
                        'Te doy la bienvenida a uno de los mejores sitios de interacción que te llevarán por una aventura\n' +
                        'llena de magia ¿estás listo para demostrar cuánto sabes? Juntos aprenderemos a usar\n' +
                        'la magia de las palabras. ¡Lucharemos contra Horrógrafo! El villano de la ortografía, por ello te\n' +
                        'ofreceré las mejores armas que hay en nuestro arsenal de la literatura: la ortografía será tu armadura. ',
                    cssClass: 'hedwig'

                }).then(a => a.present());
            },
        },
    }
</script>

<style>
    @import "../assets/styles.css";
</style>










