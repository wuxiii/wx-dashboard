<template>
  <el-header class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="el-dropdown-link">
      <span>
        <el-avatar
          shape="circle"
          :size="40"
          :src="userInfo.portrait || require('@/assets/default-avatar.png')"
        ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu>
        <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { getUserInfo } from '@/services/user'
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data } = await getUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.message)
      }
      this.userInfo = data.content
    },
    logout () {
      this.$store.commit('setUser', null)
      this.$router.push('Login')
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  background-color: #f5f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-dropdown-link {
  span {
    display: flex;
    align-items: center;
  }
}
</style>
