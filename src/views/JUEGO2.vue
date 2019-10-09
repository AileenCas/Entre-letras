<template>
    <div id="app">
        <div class="div1" ondrop="drop()" ondragover="allowDrop()"></div>
        <img src="../assets/lupita-t.png" ondragstart="drag()">
    </div>

</template>

<script>
    export default {
        NAME: 'JUEGO2',
        Methods: {
            allowDrop: function (event) {
                event.preventDefault();
                console.log(event)
            },
            drag: function (ev) {
                ev.dataTransfer.setData("text", ev.target.id);
                console.log(event)
            },
            drop: function (ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                ev.target.appendChild(document.getElementById(data));
                console.log(event)
            },
        }
    }

</script>

<style scoped>

    .div1 {
        border: 1px #0a0108 solid;
    }

    img {
        width: 100px;
        height: 100px;
    }
</style>