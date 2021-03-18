import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
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
      path: '/home',
      component: home,
      children: [
        {
          path: 'order',
          component: order
        },
        {
          path: 'order/detail/:orderId',
          component: orderDetail
        },
        {
          path: 'order/modify/:orderId',
          component: modifyOrder
        }
      ]
    }
  ]
})

