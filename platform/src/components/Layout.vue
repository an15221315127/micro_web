<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px"
                  style="background-color: rgb(238, 241, 246)">
            <el-menu router>
                <el-menu-item index="order">订单</el-menu-item>
                <el-menu-item index="product">商品</el-menu-item>
                <el-menu-item index="finance">财务</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>

<script lang="ts">
    import { Vue } from "vue-property-decorator"
    export default class Layout extends Vue {
        submit() {
            console.log('hello world')
        }
    }
</script>

<style>
</style>