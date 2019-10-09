<template>
     <div id ="app">
<Menu/>
<Toolbar/>
         <h2>¡Es hora de conocer tus resultados! </h2>
         <img  class="re" src="../assets/icon-1.png" >
         <ion-button expand="full" class="btnD" @click="Re">Te estábamos esperando</ion-button>

         <ion-grid>
            <ion-row>
                <ion-col>
                <div> Tema </div>
                </ion-col>
                <ion-col>
                    <div> Puntaje </div>
                </ion-col>
            </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Palabras agudas</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Palabras graves</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Palabras esdrújulas</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Palabras sobresdrújulas</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Uso del punto</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div>Diptongos</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Triptongos</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Hiato</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Uso de la coma</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Uso de la tilde</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
             <ion-row>
                 <ion-col>
                 <div> Tilde diacrítica</div>
             </ion-col>
                 <ion-col>
                     <div> Puntaje </div>
                 </ion-col>
             </ion-row>
                 <ion-row>
                     <ion-col>
                     <div> Tilde en palabras compuestas</div>
                 </ion-col>
                     <ion-col>
                         <div> Puntaje </div>
                     </ion-col>
                 </ion-row>
                     <ion-row>
                         <ion-col>
                         <div> Uso de las comillas</div>
                     </ion-col>
                         <ion-col>
                             <div> Puntaje </div>
                         </ion-col>
                     </ion-row>
                         <ion-row>
                             <ion-col>
                             <div>Signos de exclamación</div>
                         </ion-col>
                             <ion-col>
                                 <div> Puntaje </div>
                             </ion-col>
                         </ion-row>
                             <ion-row>
                                 <ion-col>
                                 <div> Signos de interrogación</div>
                             </ion-col>
                                 <ion-col>
                                     <div> Puntaje </div>
                                 </ion-col>
             </ion-row>

         </ion-grid>
    </div>

</template>
<script>
    import Menu from "./Menu";
    import Toolbar from "./Toolbar";
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
        }
    }
</script>

<style scoped>

</style>