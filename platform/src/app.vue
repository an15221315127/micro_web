<template>
    <router-view></router-view>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator"

    @Component({
        name: "app"
    })
    export default class App extends Vue {

        mounted() {



        }
    }
</script>

<style>
    html,
    body,
    #app {
        height: 100%;
    }
</style>