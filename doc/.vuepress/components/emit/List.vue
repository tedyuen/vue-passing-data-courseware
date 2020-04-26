<!-- 子组件 Child.vue -->
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{item}}
      <button @click="doDel(index)">Del</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Child",
  props: {
    list: Array
  },
  methods: {
    doDel(index) {
      this.$emit('delItem', index)
    }
  }
};
</script>

