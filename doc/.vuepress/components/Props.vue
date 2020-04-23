<template>
  <div class="parent">
    Parent
    <Child v-bind:myData="text"/>
  </div>
</template>

<script>
import Child from './props/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      text: '三个荤菜'
    }
  }
}
</script>

<style scope>
.parent {
  margin-top: 10px;
  width: 130px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>