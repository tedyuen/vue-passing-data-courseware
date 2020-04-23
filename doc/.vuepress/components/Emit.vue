<!--  父组件 Parent.vue -->
<template>
  <div class="parent">
    <!-- 绑定事件到子组件上 -->
    Parent
    <Child v-on:myEvent="callEvent"/>
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
  },
  methods: {
    // 子组件发起通讯后触发的函数
    callEvent() {
      this.parentData = [...arguments].join(":")
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
