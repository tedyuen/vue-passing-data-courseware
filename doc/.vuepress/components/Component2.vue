<!-- 组件2 事件触发 Component2.vue-->
<template>
  <div class="comp-2">
    Component2:
    <button @click="doPostMsg">发消息</button>
    <button @click="doCleanMsg">清空</button>
  </div>
</template>

<script>
import event from './eventHub'

export default {
  name: 'Component2',
  data() {
    return {
      myHubData: ''
    }
  },
  methods: {
    doPostMsg() {
      event.$emit('hubEvent', '消息内容1', '消息内容2')
    },
    doCleanMsg() {
      event.$emit('hubEvent', '')
    }
  }
}
</script>

<style scope>
.comp-2 {
  width: 265px;
  padding: 15px;
  border: 1px solid #b0a4e3;
}
</style>