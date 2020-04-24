<!--  父组件 Parent.vue -->
<template>
  <div class="parent-emit">
    <!-- 绑定事件到子组件上 -->
    Parent
    <Child v-on:changeDate="parentData += $event"/>
    {{parentData}}
  </div>
</template>

<script>
import Child from './emit/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      parentData: ''
    }
  }
}
</script>

<style>
.parent-emit {
  margin-top: 10px;
  width: 130px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
