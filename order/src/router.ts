import VueRouter from "vue-router";

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',// 项目A中的layout组件
            component: () => import("platform/Layout"),
            redirect: 'order',
            children: [
                {
                    path: "/order",
                    component: () => import("./views/order/index.vue")
                },
            ]
        }
    ]
})

export default router;