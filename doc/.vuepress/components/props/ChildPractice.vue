<!-- 子组件 Child.vue -->
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Child',
  props: ['list']
}
</script>

<style>
.child-props {
  width: 130px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
