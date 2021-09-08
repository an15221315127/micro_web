import VueRouter from "vue-router";

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',// 项目A中的layout组件
            component: () => import("platform/Layout"),
            redirect: 'finance',
            children: [
                {
                    path: "finance",
                    component: () => import("./views/finance/index.vue")
                }
            ]
        }
    ]
})

export default router;