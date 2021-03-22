<template>
  <el-submenu v-if="menu.subMenuList && menu.subMenuList.length > 0" :index="menu.menuId">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{menu.menuName}}</span>
    </template>
    <el-menu-item
      v-for="(subMenu,key) in menu.subMenuList" :key="key"
      @click="toRouter(menu.url + '/' + subMenu.url)"
      :index="subMenu.subMenuId">
      {{ subMenu.subMenuName }}
    </el-menu-item>
  </el-submenu>

  <el-menu-item v-else :index="menu.menuId" @click="toRouter(menu.url)">
    <i class="el-icon-menu"></i>
    <span slot="title">{{menu.menuName}}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "asideMenu",
  props: {
    menu: {
      type:Object,
      required: true
    }
  },
  methods: {
    toRouter(url) {
      console.log("jjjjj-------------" + url)
      this.$router.push('/container' + '/' + url);
    }
  }
}
</script>

<style scoped>

</style>
