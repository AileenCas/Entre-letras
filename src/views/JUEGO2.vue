<template>
    <div id="app">
    <div class="div1" @ondrop="drop" @ondragover="allowDrop"></div>
   <img id="drag1" src="../assets/lupita-t.png" draggable="true" @ondragstart="drag" alt="">
    </div>
</template>

<script>
    export default {
        name: 'JUEGO2',
        methods: {
            allowDrop: function (event) {
                event.preventDefault();
                console.log(event)
            },
            drag: function (event) {
                event.dataTransfer.setData("text", event.target.id);
                console.log(event)
            },
            drop: function (event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("text");
                event.target.appendChild(document.getElementById(data));
                console.log(event)
            },
        }}

</script>

<style scoped>
    .div1{
        border: 1px #0a0108 solid;
    }
    img{
        width: 100px;
        height: 100px;
    }
</style>