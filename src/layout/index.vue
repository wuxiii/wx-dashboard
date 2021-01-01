<template>
  <el-container class="wrapper">
    <app-sidebar/>
    <el-container direction="vertical">
      <app-header/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import Vue from 'vue'
// import { component } from 'vue/types/umd'
import AppSidebar from './sider.vue'
import AppHeader from './header.vue'
export default Vue.extend({
  name: 'LayoutIndex',
  components: { AppSidebar, AppHeader },
  data () {
    return {
      collapse: false
    }
  }
  // methods: {
  //   handleCollapse: function () {
  //     this.collapse = !this.collapse
  //   }
  // }

})
</script>

<style>
.el-container{
    min-height: 100vh;
    min-width: 1000px;
  }
</style>
