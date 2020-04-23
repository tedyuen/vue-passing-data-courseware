```html
<!-- 监听组件 -->
<script>
import event from '@/eventHub'
export default {
  created() {
    event.$on('hubEvent',this.doHubEvent)
  },
  methods: {
    doHubEvent() {
      // do something...
    }
  },
  beforeDestroy() {
    event.$off('hubEvent', this.doHubEvent)
  }
}
</script>
```

```html
<!-- 触发事件组件 -->
<template>
  <div>
    <button @click="callEvent">触发</button>
  </div>
</template>

<script>
import event from '@/eventHub'
export default {
  methods: {
    callEvent() {
      event.$emit('hubEvent', '参数')
    }
  }
}
</script>
```