<template>
     <div id ="app">
<Menu/>
<Toolbar/>
         <h2>¡Es hora de conocer tus resultados! </h2>
         <img  class="re" src="../assets/icon-1.png" >
         <ion-button expand="full" class="btnD" @click="Re">Te estábamos esperando</ion-button>
         <ion-item>
             <ion-label> <ion-icon name="trophy"></ion-icon>Nivel:</ion-label>
             <ion-note slot="end" color="tertiary"> <ion-input id="nivel" class="input" readonly></ion-input></ion-note>
         </ion-item>

         <ion-item>
             <ion-label><ion-icon name="logo-game-controller-b"></ion-icon>EXP:</ion-label>
             <ion-note slot="end" color="success"><ion-input id="exp" readonly class="input"></ion-input></ion-note>
         </ion-item>


     </div>

</template>
<script>
    import Menu from "./Menu";
    import Toolbar from "./Toolbar";
    import firebase from '../libFirebase';
    import db from '../libFirestore';
    export default {
        name: "Resultados",
        components: {Toolbar, Menu},
        methods:{
            Re(){
                return this.$ionic.alertController.create({
                        header:' Es un gusto verte por acá, imagino que has aprendido demasiado.'+
                        'Horrográfo está un poco enojado, pensó que no lo podrías vencer.',
                        subHeader:'¡Lo lograste! Es hora de conquistar el mundo.',
                        }).then(a => a.present());
            }
        },
        mounted() {
            db.collection('usuarios').doc(firebase.auth().currentUser.email).get().then(doc => {
                document.getElementById('nivel').value = doc.data().nivel;
                document.getElementById('exp').value = doc.data().exp + ' XP'

            });
        },
    }
</script>

<style scoped>

</style>