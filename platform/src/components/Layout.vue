<template>
    <el-container style="height: 100%; border: 1px solid #eee">

        <el-aside width="200px"
                  style="background-color:rgb(0, 21, 41)">
            <el-menu router
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     background-color="rgb(0, 21, 41)">
                <el-menu-item :index="item.path"
                              v-for="item in routes"
                              :key="item.path">{{item.meta.title}}</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <keep-alive>
                <router-view />
            </keep-alive>
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator"

    @Component({
        name: "Layout"
    })
    export default class Layout extends Vue {
        get routes() {
            return this.$router.options.routes[0].children
        }

    }
</script>

<style>
</style>