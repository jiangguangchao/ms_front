//登录拦截器
import router from '../router'
router.beforeEach((to,from,next) =>{
  if (to.meta.requireAuth) {
    let loginUser = window.sessionStorage.getItem("loginUser")
    if (loginUser.userId) {
      next();
    } else {
      next({path:'/login'})
    }
  } else {
    next()
  }
})


