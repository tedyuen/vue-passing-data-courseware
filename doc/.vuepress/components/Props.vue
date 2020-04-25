<template>
  <div class="parent-props">
    Parent: 
    <Child myData="父组件数据"/>
  </div>
</template>

<script>
import Child from './props/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  }
}
</script>

<style>
.parent-props {
  margin-top: 10px;
  width: 140px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>