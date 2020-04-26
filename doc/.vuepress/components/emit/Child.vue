<!-- 子组件 Child.vue -->
<template>
  <div class="child-emit">
    <!-- 触发事件 -->
    Child: <button @click="doEvent">触发事件</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    // 事件函数
    doEvent() {
      this.$emit('changeData', '新数据1')
    }
  }
}
</script>

<style>
.child-emit {
  width: 120px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>