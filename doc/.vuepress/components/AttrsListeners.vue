<!--  父组件 AttrsListeners.vue -->
<template>
  <div class="parent-attr">
    Parent
    <Child1
      foo="fooStr"
      goo="gooStr"
      v-on:event1="event1"
      v-on:event2="event2"
    />
    <div>{{eventMsg1}}</div>
    <div>{{eventMsg2}}</div>
  </div>
</template>

<script>
import Child1 from './attrs/Child1.vue'

export default {
  name: 'Parent',
  inheritAttrs: false,
  components: {
    Child1
  },
  data() {
    return {
      eventMsg1: '',
      eventMsg2: ''
    }
  },
  methods: {
    event1(msg) {
      this.eventMsg1 = `even1收到来自${msg}的消息`
    },
    event2(msg) {
      this.eventMsg2 = `even2收到来自${msg}的消息`
    }
  }
}
</script>

<style>
.parent-attr {
  margin-top: 10px;
  width: 220px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
