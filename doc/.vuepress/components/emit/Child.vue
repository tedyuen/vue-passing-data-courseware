<!-- 子组件 Child.vue -->
<template>
  <div class="child">
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
      this.$emit('myEvent', '参数1', '参数2')
    }
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