import VueRouter from "vue-router"



const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',
            component: () => import("./components/Layout.vue"),
            redirect: 'product',
            children: [
                {
                    path: "/order",
                    name: "order",
                    component: () => import("order/Order"),
                    meta: {
                        title: "订单模块"
                    }
                },
                {
                    path: "product",
                    name: "product",
                    component: () => import("product/Product"),
                    meta: {
                        title: "商品模块"
                    }
                },
                {
                    path: "/finance",
                    name: "finance",
                    component: () => import("finance/Finance"),
                    meta: {
                        title: "财务模块"
                    }

                },
            ]
        }
    ]
})

export default router;