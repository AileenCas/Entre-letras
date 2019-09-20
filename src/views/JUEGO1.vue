<template>
    <div>
        <ion-grid class="grid1">
        <ion-grid  align-self-start class="grid" >
            <ion-row>
                <ion-col>
        <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
            <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                {{ item }}
            </drag-selector-item>
        </drag-selector>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid  align-self-start class="grid" >
        <ion-row>
            <ion-col>
                <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
                    <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                        {{ item }}
                    </drag-selector-item>
                </drag-selector>
            </ion-col>
        </ion-row>
    </ion-grid>
        <ion-grid class="grid" size="5">
            <ion-row>
                <ion-col>
                    <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
                        <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                            {{ item }}
                        </drag-selector-item>
                    </drag-selector>
                </ion-col>
            </ion-row>
        </ion-grid>
        </ion-grid>
        <ion-grid class="grid2">
        <ion-grid class="grid" >
            <ion-row>
                <ion-col>
                    <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
                        <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                            {{ item }}
                        </drag-selector-item>
                    </drag-selector>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid class="grid" size="5">
            <ion-row>
                <ion-col>
                    <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
                        <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                            {{ item }}
                        </drag-selector-item>
                    </drag-selector>
                </ion-col>
            </ion-row>
        </ion-grid>
            <ion-grid class="grid" size="5">
                <ion-row>
                    <ion-col>
                        <drag-selector v-model="checkedList" @change="handleDragSelectorChange" class="drag-selector">
                            <drag-selector-item v-for="(item, index) in myDragList" :value="item" :key="index" class="drag-selector__item">
                                {{ item }}
                            </drag-selector-item>
                        </drag-selector>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-grid>
        {{ checkedList }}
    </div>
</template>

<script>
    import VueDragSelector from "vue-drag-selector";
    import Vue from "vue"
    Vue.use(VueDragSelector);
    export default {
        name: "JUEGO1",
        data() {
            return {
                checkedList: [],
                myDragList: [
                    { a: 1, b: 5 },
                    { a: 2, b: 6 },
                    { a: 3, b: 7 }
                ]
            };
        },
        methods: {
            handleDragSelectorChange(checkedList) {
                console.log(checkedList);
            }
        }
    };
</script>
