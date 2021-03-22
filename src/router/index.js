import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import container from '../components/container'
import home from '../components/home/home'
import order from '../components/order/order'
import orderDetail from "../components/order/orderDetail";
import modifyOrder from "../components/order/modifyOrder";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/container',
      component: container,
      children: [

        //首页
        {
          path: 'home',
          component: home,
        },

        //订单管理
        {
          path: 'om/order',
          component: order
        },
        {
          path: 'om/order/detail/:orderId',
          component: orderDetail
        },
        {
          path: 'om/order/modify/:orderId',
          component: modifyOrder
        }
      ]
    }
  ]
})

