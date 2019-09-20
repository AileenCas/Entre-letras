<template>
    <div id='app'>
        <ul class="todo-list">
            <li @dragover.prevent @drop="dragFinish(-1, $event)" v-if="dragging > -1" class="trash-drop todo-item" v-bind:class="{drag: isDragging}">Delete</li>

            <li v-else>
                <input placeholder="Type new task and press enter" type="text" class="new-todo todo-item" v-model="newItem" @keyup.enter="addItem">
            </li>
            <li class="todo-item" v-for="(item, i) in todos" v-key="i" draggable="true" @dragstart="dragStart(i, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEnd" @drop="dragFinish(i, $event)">
                <input type="checkbox" v-model="item.done" />
                <span :class="{done: item.done}">{{ item.title }}</span>
                <span class="remove-item" @click="removeItem(item)">x</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        NAME: 'JUEGO2',
    }

</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .todo-list {
        list-style-type: none;
        padding: 10px;
    }

    .done {
        text-decoration: line-through;
        color: #888;
    }

    .new-todo {
        width: 100%;
    }

    .trash-drop {
        border: 2px dashed #ccc !important;
        text-align: center;
        color: #e33;
    }

    .trash-drop:-moz-drag-over {
        border: 2px solid red;
    }

    .todo-item {
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 14px 8px;
        margin-bottom: 3px;
        background-color: #fff;
        box-shadow: 1px 2px 2px #ccc;
        font-size: 22px;
    }

    .remove-item {
        float: right;
        color: #a45;
        opacity: 0.5;
    }

    .todo-item:hover .remove-item {
        opacity: 1;
        font-size: 28px;
    }
</style>