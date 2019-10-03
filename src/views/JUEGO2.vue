<template>
    <div id="root">
    <div class="div1" ondrop="drop()" ondragover="allowDrop()"></div>
   <img src="../assets/lupita-t.png"  ondragstart="drag()">
    </div>
</template>

<script>
    export default {
        NAME: 'JUEGO2',
        Methods: {
            allowDrop: function (ev) {
                ev.preventDefault();
            },
            drag: function (ev) {
                ev.dataTransfer.setData("text", ev.target.id);
            },
            drop: function (ev) {
                ev.preventDefault();
                var data = ev.dataTransfer.getData("text");
                ev.target.appendChild(document.getElementById(data));
            },
        }}

</script>

<style scoped>

</style>