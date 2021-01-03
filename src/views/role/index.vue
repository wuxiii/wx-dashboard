<template>
 <div class="role">
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { Form } from 'element-ui'
import Vue from 'vue'
import { getRoles, deleteRole } from '@/services/role'
export default Vue.extend({
  name: 'Role'
})
</script>

<style>

</style>
