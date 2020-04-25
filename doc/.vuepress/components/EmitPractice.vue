<!--  父组件 Parent.vue -->
<template>
  <div class="parent-emit-practice">
    Parent
    <Input @addItem="addItem"/>
    <List @delItem="delItem" :list="list"/>
  </div>
</template>

<script>
import Input from './emit/Input.vue'
import List from './emit/List.vue'

export default {
  name: 'Parent',
  components: {
    Input,
    List
  },
  data() {
    return {
      list: ["张三", "李四", "王五"]
    }
  },
  methods: {
    addItem(str) {
      this.list.push(str)
    },
    delItem(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
.parent-emit-practice {
  margin-top: 10px;
  width: 180px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
