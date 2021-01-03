<template>
  <el-aside class="aside" width='auto'>
    <el-menu
      default-active="/role"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="$store.state.isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-lock"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/resource">资源管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/course">
        <i class="el-icon-film"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
   <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">广告管理</span>
        </template>
         <el-menu-item-group>
          <el-menu-item index="/advert">广告列表</el-menu-item>
          <el-menu-item index="/advert-space">广告位列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'AppSiderbar',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      defaultActiveIndex: this.$route.fullPath
    }
  },
  methods: {
    handleOpen: () => {},
    handleClose: () => {}
  }
})
</script>

<style lang="scss" scoped>
.aside{
  background-color: #545c64;

  overflow: hidden;
  height: 100vh;

}
</style>
