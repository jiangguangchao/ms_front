<!--说明：该组件是登录之后的布局容器，包含头部（header），左侧菜单栏（aside）和右侧内容展示区（main）-->

<template>
  <el-container>
    <el-header>订单管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <aside-menu v-for="(menu,key) in menus" :key="key" :menu="menu"></aside-menu>
<!--          <el-menu-item @click="home" >-->
<!--            <i class="el-icon-menu"></i>-->
<!--            <span slot="title">首页</span>-->
<!--          </el-menu-item>-->
<!--          <el-submenu >-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span>订单</span>-->
<!--            </template>-->
<!--            <el-menu-item  @click="orderMag">订单管理</el-menu-item>-->
<!--            <el-menu-item >进货管理</el-menu-item>-->
<!--          </el-submenu>-->

<!--          <el-submenu index="3">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span>客户</span>-->
<!--            </template>-->
<!--            <el-menu-item index="3-1">订单管理</el-menu-item>-->
<!--            <el-menu-item index="3-2">进货管理</el-menu-item>-->
<!--          </el-submenu>-->





        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenu from "./asideMenu";

export default {
  data() {
    return {
      menus:[]
    }
  },
  components:{
    AsideMenu

  },
  methods: {
    orderMag() {
      this.$router.push('/container/om/order')
    },
    home() {
      this.$router.push('/container/home')
    },

    //查询菜单列表
    async findMenus() {
      const {data:res} =await this.$http. get("menu")
      if (res.code != '00') {
        this.$message.error(res.message)
        return
      }
      this.menus = res.data.menuList;
      console.log(this.menus)

    }
  },
  created() {
    console.log("开始请求菜单")
    this.findMenus();
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  font-size: 20px;
  color: floralwhite;
  background-color: #373d41;
}

.el-aside {
  color: floralwhite;
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>
