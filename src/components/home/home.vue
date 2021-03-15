<template>
  <el-container>
    <el-header>订单管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-1" @click="orderMag">订单管理</el-menu-item>
            <el-menu-item index="1-2">进货管理</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>客户管理</span>
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
        console.log('ordermag');
        this.$router.push('/home/order')
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
