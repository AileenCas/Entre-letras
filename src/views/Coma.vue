<template>
    <div id="app">
        <ion-button color="#BDBDBD" @click="atras1()">
            <ion-icon name="arrow-back"></ion-icon>
        </ion-button>
        <h1>Uso de la coma</h1>
        <p>La coma es un signo de puntuación que representa una pausa más breve que la del punto.</p>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
        <ion-card>
        <h2>Coma de complemento circunstancial</h2>
            <p>Debe ponerse coma para separar los complementos circunstanciales, solo si el sujeto se nombra explícitamente.</p>
       <p> Los complementos circunstanciales pueden escribirse al final o al principio de la oración.</p>
        <h2>Ejemplos</h2>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide>
                <h3>Ayer, Martha cambió su celular.</h3>
            </ion-slide>
            <ion-slide>
                <h3>Martha cambió su celular, ayer.</h3>
            </ion-slide>
        </ion-slides>
        </ion-card>
            </ion-slide>
            <ion-slide>
        <ion-card>
        <h2>Coma de conector</h2>
        <p>Debe escribirse coma delante de los conectores como “sin embargo”, “por lo tanto”, “por consiguiente” etc.</p>
        <h2>Ejemplo</h2>
        <h3>Estudió; sin embargo, perdió el examen.</h3>
        </ion-card>
            </ion-slide>
            <ion-slide>
        <ion-card>
            <h2>Coma de conjunción  </h2>
               <p> Debe escribir coma antes de conjunciones como “pero”, “aunque”, “no obstante”, entre otras.</p>
            <h2>Ejemplo</h2>
             <h3>Susana decidió ir, pero revisó el informe antes de enviarlo.</h3>
        </ion-card>
            </ion-slide>
            <ion-slide>
        <ion-card>
            <h2>Coma de vocativo o de llamado de atención</h2>
            <p>Esta es una de las comas que más se omite; sin embargo,
                debe escribirse siempre que se intente llamar la atención de alguien. </p>
            <h2>Ejemplo</h2>
            <h3>Reciba un cordial saludo, señora Amparo:</h3>
            <h3>Gustavo, por favor avísame cuando tengas listo el instrumento.</h3>
            <p>El lugar en el que se escribe el vocativo depende de la intención con la que se quiere hablar;
                por ejemplo, si el tono es de llamado de atención, el nombre debe estar al final de la oración:</p>
            <h3>
                Avísame cuando tengas el instrumento, Gustavo.
            </h3>
        </ion-card>
            </ion-slide>
            <ion-slide>
        <ion-card>
            <h2>  Coma de enumeración</h2>
            <p>Debe escribirse coma siempre que se separen los sustantivos de una lista:</p>
            <h2>Ejemplo</h2>
            <h3>Ayer compré un par de zapatos, dos camisas, dos corbatas y un pantalón negro.</h3>
        </ion-card>
            </ion-slide>
            <ion-slide>
        <ion-card>
            <h2>Coma de complemento complejo </h2>
        <p>Cuando en un complemento hay algún verbo terminado en gerundio, participio o infinitivo, debe escribirse coma.
            También debeescribirse cuando hay expresiones que indican tiempo.</p>
           <h2>Ejemplo</h2>
        <ion-slides pager="true" :options="slideOpts">
            <ion-slide><h3> Caminando, comiendo, trayendo.</h3></ion-slide>
            <ion-slide><h3>Construido, asado, escrita, provisto, imprimido</h3></ion-slide>
        </ion-slides>
    </ion-card>
            </ion-slide>
        </ion-slides>
    </div>
</template>

<script>
    export default {
        name: "Coma",
        methods: {
            atras1: function () {
                this.$router.push({name: 'Temas'})
            },
        },


    }
</script>

<style scoped>

</style>