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
                    component: () => import("order/Order")

                },
                {
                    path: "product",
                    component: () => import("product/Product")
                },
                {
                    path: "/finance",
                    component: () => import("finance/Finance")

                },
            ]
        }
    ]
})

export default router;