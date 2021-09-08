import Vue from "vue";
import App from './app.vue'
import VueRouter from 'vue-router'
import router from "./router"
import store from "./store/index";
import "./initzal"
Vue.use(VueRouter)

new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
})