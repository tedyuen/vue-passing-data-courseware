<!-- 组件1 监听事件 Component1.vue-->
<template>
  <div class="comp-1">
    Component1: {{myHubData}}
  </div>
</template>

<script>
import event from './eventHub'

export default {
  name: 'Component1',
  data() {
    return {
      myHubData: ''
    }
  },
  created() {
    event.$on('hubEvent',this.doHubEvent)
  },
  methods: {
    doHubEvent() {
      this.myHubData = [...arguments].join(':')
    }
  },
  beforeDestroy() {
    event.$off('hubEvent', this.doHubEvent)
  }
}
</script>

<style scope>
.comp-1 {
  width: 265px;
  padding: 15px;
  border: 1px solid #ffa631;
}
</style>