declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

interface Window {
    $Bus: any;
}
declare module "order/Order" {
    const Order: any;

    export default Order;
}
declare module "finance/Finance" {
    const Finance: any;

    export default Finance;
}

declare module "product/Product" {
    const Product: any;

    export default Product;
}

