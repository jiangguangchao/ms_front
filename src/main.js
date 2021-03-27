// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import * as echarts from 'echarts'

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
axios.defaults.baseURL = "http://localhost:8090"
axios.defaults.withCredentials = true



Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  console.log(to)
  if (to.meta.noAuth == true) {
    next()
    return;
  }
  console.log("没有noAuth标识，说明需要验证")
  let loginUserStr = window.sessionStorage.getItem("loginUser")
  let loginUser = JSON.parse(loginUserStr)
  console.log("loginUser:" + loginUser)
  if (loginUser && loginUser.userId) {
    console.log("验证通过")
    next();
    return;
  }
  console.log("验证未通过，跳转登录页")
  next({path:'/login'})

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
