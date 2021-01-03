<template>
 <div class="resource">
    <resource-list />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ResourceList from './components/List.vue'

export default Vue.extend({
  name: 'Resource',
  components: {
    ResourceList
  }
})
</script>

<style>

</style>
