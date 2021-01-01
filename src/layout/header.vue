<template>
  <el-header class="header">
    <button type="button" class="el-button hamburger el-button--text" @click="expandMenu">
      <i :class="collapseClass"></i>
        <!-- <i class="el-icon-s-fold" v-if="$store.state.isCollapse"></i>
      <i class="el-icon-s-unfold" v-else></i> -->
    </button>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
      v-for="item in levelList"
        :key="item.name"
        :to="item.path"
        >{{ item.meta.title }}</el-breadcrumb-item>

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
        <el-dropdown-item divided @click.native="logout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { fetchUserInfo } from '@/services/user'
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data () {
    return {
      userInfo: {},
      breadList: []
    }
  },

  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data } = await fetchUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.message)
      }
      this.userInfo = data.content
    },
    logout () {
      this.$store.commit('setUser', null)
      this.$router.push('Login')
    },
    expandMenu () {
      this.$store.commit('collapseMenu', !this.$store.state.isCollapse)
    }
  },
  computed: {
    collapseClass () {
      return !this.$store.state.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
    },
    levelList () {
      console.log(this.$route)
      const matched = this.$route.matched.slice(0)
      console.log(matched)
      if (matched[matched.length - 1].name === 'home') {
        return matched.splice(-1, 1)
      }
      return matched
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  background-color: #f5f5f9;
  display: flex;
  align-items: center;
}
.el-button{
  margin-right: 10px;
  font-size: 20px;
}
.el-breadcrumb{
  display: inline-block;
}
.el-dropdown{
    margin-left: auto;

}
.el-dropdown-link {
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
