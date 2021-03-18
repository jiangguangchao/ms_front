<!--说明：该组件是登录之后的布局容器，包含头部（header），左侧菜单栏（aside）和右侧内容展示区（main）-->
<template>
  <el-container>
    <el-header>订单管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单</span>
            </template>
            <el-menu-item index="1-1" @click="orderMag">订单管理</el-menu-item>
            <el-menu-item index="1-2">进货管理</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>客户</span>
            </template>
            <el-menu-item index="2-1">订单管理</el-menu-item>
            <el-menu-item index="2-2">进货管理</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    orderMag() {
      this.$router.push('/container/forder')
    }
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
