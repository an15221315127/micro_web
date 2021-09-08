import VueRouter from "vue-router";

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',// 项目A中的layout组件
            component: () => import("platform/Layout"),
            redirect: 'product',
            children: [
                {
                    path: "/product",
                    component: () => import("./views/product/index.vue")
                },
            ]
        }
    ]
})

export default router;