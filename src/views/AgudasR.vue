<template>
    <ion-app>
    <ion-list>
        <ion-item-sliding>
            <ion-item>
                <ion-label>Item</ion-label>
            </ion-item>
            <ion-item-options side="end">
                <ion-item-option @click="unread(item)">Unread</ion-item-option>
            </ion-item-options>
        </ion-item-sliding>

        <ion-item-sliding>
            <ion-item>
                <ion-label>Item</ion-label>
            </ion-item>
            <ion-item-options side="end">
                <ion-item-option @click="unread(item)">Unread</ion-item-option>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    </ION-APP>
</template>

<script>
    export default {
        name: "AgudasR"
    }
</script>

<style scoped>

</style>