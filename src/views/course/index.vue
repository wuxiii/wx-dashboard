<template>
<div>course</div>
</template>

<script lang='ts'>
import { fetchUserInfo } from '@/services/user'
import Vue from 'vue'
export default Vue.extend({
  name: 'Course',
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const data = await fetchUserInfo()
      console.log('======', data)
    },
    logout () {
      this.$store.commit('setUser', null)
      this.$router.push('Login')
    }
  }
})
</script>

<style>

</style>
