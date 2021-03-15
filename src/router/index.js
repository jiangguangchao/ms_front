import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import home from '../components/home/home'
import order from '../components/order/order'

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
        }
      ]
    }
  ]
})

