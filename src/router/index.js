import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import container from '../components/container'
import home from '../components/home/home'
import order from '../components/order/order'
import orderDetail from "../components/order/orderDetail";
import modifyOrder from "../components/order/modifyOrder";
import user from "../components/system/user/user.vue"
import userDetail from "../components/system/user/userDetail.vue"
import userModify from "../components/system/user/userModify.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login",
      meta: {
        noAuth: true
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        noAuth: true
      }
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
        },

        //用户管理
        {
          path: 'system/user',
          component: user
        },
        {
          path: "system/user/detail",
          component: userDetail
        },
        {
          path: "system/user/modify",
          component: userModify
        }
      ]
    }
  ]
})

