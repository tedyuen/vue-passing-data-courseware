<!-- 子组件 Child.vue -->
<template>
  <div class="child">Child: {{myData}}</div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    myData: String
  }
}
</script>

<style scope>
.child {
  width: 120px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
