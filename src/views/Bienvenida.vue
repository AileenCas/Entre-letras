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
                <ion-button expand="full" class="btn1" @click="presentActionSheet"> Aceptar el reto</ion-button>

            </ion-slide>
        </ion-slides>
        <h5>Copyright © 2019 | Entre letras</h5>
    </ion-app>
</template>
<script>
    import firebase from "../libFirebase";
    import libFirestore from "../libFirestore"
    import router from '../router'
    import mailsurp from 'mailslurp-client'

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
        mounted() {

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
                                if (email === '') {
                                    this.mostrarToast('Ingresa un correo valido, por favor.');
                                } else if (nombre === '') {
                                    this.mostrarToast('Ingresa un nombre completo valido, por favor.');
                                } else if (pass === '') {
                                    this.mostrarToast('Ingresa una contraseña valida, por favor.');
                                } else {
                                    firebase.auth().signOut().then();
                                    firebase.auth().createUserWithEmailAndPassword(email, pass).then();
                                    this.presentLoading('Registrando su cuenta, por favor, espere un momento...');
                                    libFirestore.collection('usuarios').doc(email).set({
                                        nombre: nombre,
                                        exp: 0,
                                        nivel: 1
                                    });
                                    setTimeout(function () {
                                        firebase.auth().signInWithEmailAndPassword(email, pass).then();
                                        firebase.auth().currentUser.updateProfile({
                                            displayName: nombre
                                        }).then();
                                        router.push({
                                            name: 'TableroPrincipal'
                                        })
                                    }, 5000);
                                }
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
                                setTimeout(() => {
                                    this.$router.push({
                                        name: 'TableroPrincipal'
                                    })
                                }, 3000)
                            },
                        },
                        'Cancelar']
                }).then(a => a.present());
            },
            mostrarToast: async function(mensaje){
                const toast = await this.$ionic.toastController.create({
                    message: mensaje,
                    duration: 3000,
                    position: "bottom"
                });
                await toast.present();
            },
            alert3: function () {
                return this.$ionic.alertController.create({
                    header: 'Aprende con tus amigos',
                    message: 'Ingresa el correo a la persona a quien le quieres compartir tu expericiencia con esta gran aplicación.',
                    inputs:[{type: 'text', placeholder: 'Ingresa el correo a compartir', id: 'correoCompartir'}],
                    buttons: [
                        {
                            text: '¡Enviar!',
                            icon: 'mail',
                            handler: () => {
                                let mail = new mailsurp({apiKey: '17b2f8b96605cf0019e233c99ab1bf4fea8b874dfa6115ab6aafd632715835cc'});
                                mail.sendEmail('41bd55ea-de4b-4671-81c4-fb38932ffad2', {
                                    to: [document.getElementById('correoCompartir').value],
                                    body: '¡Hola! Bienvenido a Entre Letras.                                                                                                                                                                                                   ' +
                                        ' ¿Quieres adentarte en el maravilloso mundo de la ortografía? Ingresa en la siguiente dirección.                                                                                       ' +
                                        'http://colsam.com.co/entreletras/',
                                    subject: 'Bienvenido a Entre Letras'
                                })
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










