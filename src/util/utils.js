import Vue from 'vue'
import router from '../router'
export default {
  //封装axios，传入axiosConfig对象
  //  axiosConfig: {
  //    method:向后台发起请求的方法名  必传
  //    usrl:后台请求地址  必传
  //    param:get请求参数  非必传
  //    data:post,put等请求参数
  //    successMsg: 指定正常情况下提示信息 非必传
  //    successRouter:成功请求后跳转到的页面
  //    errorMsg:指定异常情况提示信息 非必传
  //
  //  }
  //后台返回对象
  //    {
  //     code: '',  00:表示请求返回正常，01：请求返回异常，05：表示当前用户没有登录，前台可以根据此code，路由到登录页面
  //      message:'',提示信息
  //      data:''后台返回的响应数据对象，非必传
  //    }
  myAxios(axiosConfig) {
    return Vue.prototype.$http({
      method: axiosConfig.method,
      url: axiosConfig.url,
      params:axiosConfig.params,
      data: axiosConfig.data
    }).then(res => {

      switch (res.data.code){

        //后端返回正常
        case "00":
          if (axiosConfig.successRouter) {
            router.push({path: axiosConfig.successRouter})
          }
          if (axiosConfig.successMsg){
            Vue.prototype.$message.success(axiosConfig.successMsg)
          }
          break;

        //当前用户没有登录，跳转到登录页面
        case "05":
          Vue.prototype.$message.error("请先登录");
          router.push({path: "/login"})
          break;

        //当前操作没有权限，跳转到权限提示页面
        case "06":
          break;

        //后台响应异常
        default:
          Vue.prototype.$message.error(errorMsg?errorMsg:res.data.message);

      }

      return res.data;
    })
  },
}
