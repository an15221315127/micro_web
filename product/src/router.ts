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
                    component: () => import("./views/product/index.vue"),
                    meta: {
                        title: "商品模块"
                    }
                },
                {
                    path: "/order",
                    component: () => import("order/Order"),
                    meta: {
                        title: "订单模块"
                    }
                },
            ]
        }
    ]
})

export default router;