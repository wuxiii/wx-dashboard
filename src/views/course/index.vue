<template>
  <div class="course">
    <course-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CourseList from './components/CourseList.vue'

export default Vue.extend({
  name: 'Course',
  components: {
    CourseList
  }
})
</script>

<style lang="scss" scoped></style>
