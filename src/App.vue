<template>
    <div id="app">
        <router-view name="header"></router-view>
        <router-view name="main"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
@import "assets/styles.css";
</style>