declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}


declare module "platform/Layout" {
    const Layout: any;
    export default Layout;
}
declare module "order/Order" {
    const Order: any;
    export default Order;
}


declare module "@/store" {
    const store: any;
    export default store;
}

interface Window {
    $Bus: any;
}