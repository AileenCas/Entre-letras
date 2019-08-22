<template>
    <ion-app>
        <ion-button color="#BDBDBD" @click="atras1()">
                <ion-icon name="arrow-back"></ion-icon>
            </ion-button>
        <h1>Uso del punto</h1>
          <ion-card><img src="../assets/punt1.png"></ion-card>
                <ion-slides pager="true" :options="slideOpts">
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2> Punto final</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>Se utiliza cuando el párrafo que está culminando es el último del texto.</p>
                                <p> Ejemplo: Y esa fue la historia de cómo mis padres se conocieron.</p>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2> Punto seguido</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>Se utiliza para separar una idea de otra en el mismo párrafo.</p>
                               <p> Ejemplo: Cuando finalizamos el proyecto nuestros padres estaban muy contentos del éxito obtenido.
                                   Nos llevó 4 meses finalizar nuestro trabajo.</p>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2> Punto y aparte</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>Se utiliza para cambiar el contexto, pero además de separar dos oraciones separa dos
                                    párrafos.</p>
                                <p>Ejemplo: El mar estaba embravecido aquel día. </p>
                                <p>Los barcos bailaban sobre el agua sorteando las olas con dificultad.</p>
                                </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2> Punto suspensivos</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>Los puntos suspensivos pueden utilizarse para marcar en el discurso distintas cosas:
                                    una pausa, suspenso, vacilación, la supresión de parte de un texto, entre otras cosas.</p>
                                <p> Ejemplo: •Si supieras lo que me dijo... </p>
                                <p> •De tal palo... Así que no me vuelvas a recordar que soy hijo de mi padre.</p>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2> Punto y coma</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>El punto y coma es signo que indica una pausa intermedia entre la que se hace con la coma (menor) y la del punto (mayor).</p>
                                <p> Ejemplo:
                                    Fueron a la cena: Marcos, el papá; Marcela, la mamá; Juan, el hermano; Sofía, la prima; Sandra, la hermana.</p>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                    <ion-slide>
                        <ion-card>
                            <ion-card-header>
                                <h2>Los dos puntos</h2>
                            </ion-card-header>
                            <ion-card-content class="cards2">
                                <p>Los dos puntos se escriben para llamar la atención sobre lo que se escribe a continuación.</p>
                                <p> Ejemplo: Querida prima:</p>
                                    <p>Te escribo para saludarte y preguntarte por la salud de mis queridos tíos (…) </p>
                            </ion-card-content>
                        </ion-card>
                    </ion-slide>
                </ion-slides>

    </ion-app>
</template>

<script>
    export default {
        name: "Punto",
        methods:{
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },


        },
    }
</script>

<style scoped>

</style>