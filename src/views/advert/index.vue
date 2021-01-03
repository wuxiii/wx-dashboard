<template>
<div>
  <advert-list></advert-list>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import AdvertList from './components/List.vue'
export default Vue.extend({
  name: 'advert',
  components: {
    AdvertList

  }
})
</script>

<style>

</style>
