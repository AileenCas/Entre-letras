 <template>
    <ion-app>
        <ion-menu contentId="menu-content" side="start" >
            <ion-header>
                <ion-toolbar>
                    <ion-title>Menú</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-item button="true" @click="Inicio()"><ion-icon name="home"></ion-icon> <ion-label>Inicio</ion-label></ion-item>
                    <ion-item button="true" @click="Perfil()"><ion-icon name="person"></ion-icon> <ion-label>¡Ve a tu perfil!</ion-label></ion-item>
                    <ion-item button="true" @click="Comparte()"><ion-icon name="people"></ion-icon> <ion-label>¡Comparte con tus amigos!</ion-label></ion-item>
                    <ion-item button="true" @click="Perfiles()"><ion-icon name="hand"></ion-icon> <ion-label>¿Quieres conocernos?</ion-label></ion-item>
                    <ion-item button="true" @click="cerrarSesion()"><ion-icon name="log-out"></ion-icon> <ion-label>Cerrar Sesión</ion-label></ion-item>
                </ion-list>
            </ion-content>
            <h5 class="h6" >Copyright © 2019 | Entre letras</h5>
        </ion-menu>
        <ion-router-outlet main></ion-router-outlet>

    </ion-app>
</template>
<script>
    import firebase from 'firebase'
    import mailsurp from 'mailslurp-client'

    export default {
        name: 'Menu',
        props: {
            timeout: {type: Number, default: 2000},
        },
        methods: {
            Inicio: function () {
                this.$router.push({name: 'TableroPrincipal'})
            },
            Perfil: function () {
                this.$router.push({name:'Perfil'})
            },
            Perfiles: function () {
                this.$router.push({name:'Perfiles'})
            },
            Comparte: function (){
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
            },
            Ayuda: function () {
                return this.$ionic.push({name:'Ayuda'})
            },
            cerrarSesion: function(){
                firebase.auth().signOut();
                this.presentLoading('Cerrando sesión, por favor espere...');
                setTimeout(() => {
                    this.$router.push({path: '/'})
                }, 2000);
            },
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
        }
</script>