import Vue from "vue";
import App from './app.vue'
import VueRouter from 'vue-router'
import router from "./router"
import "./initzal"
Vue.use(VueRouter)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})