import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/home"
import Index from "./pages/index"
import Product from "./pages/product"
import Detail from "./pages/detail"
import Cart from "./pages/cart"
import Order from "./pages/order"
import OrderConfirm from "./pages/orderConfirm"
import orderList from "./pages/orderList"
import OrderPay from "./pages/orderPay"
import Alipay from "./pages/alipay"
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'/product/:id',
                    name:'product',
                    component:Product,
                },
                {
                    path:'/detail:id',
                    name:'detail',
                    component:Detail,
                },
            ]
        },
        {
            path:'/cart',           /** 购物车*/
            name:'cart',
            component:Cart,
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',           /** 订单列表*/
                    name:'order-list',
                    component:orderList, 
                },
                {
                    path:'confirm',        /** 订单确认*/
                    name:'order-confirm',
                    component:OrderConfirm, 
                },
                {
                    path:'pay',            /** 订单支付*/
                    name:'order-pay',
                    component:OrderPay, 
                },
                {
                    path:'alipay',        /** 订单确认*/
                    name:'alipay',
                    component:Alipay, 
                }
            ]
        },
    ]
})