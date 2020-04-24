### 三、`EventHub` 跨组件通讯

> 官网路径: 学习 -> 教程 -> 迁移 -> 从Vue1.x迁移 -> 事件 -> `$dispatch`和`$broadcast`

#### 知识要点

1. 用 `new Vue()` 创建EventHub实例
2. 事件记得销毁
3. 可以被任何关系的组件使用
4. 不同的 `EventHub` 实例间无法通讯

#### 效果

<ClientOnly>
  <EventHubPage />
</ClientOnly>

#### 代码演示

1. **事件中心**

```javascript
// 事件中心 eventHub.js
import Vue from 'vue'

export default new Vue();
```

2. **父组件**
   
```html
<!--  父组件 EventHub.vue -->
<template>
  <div class="parent">
    Parent
    <Component1 />
    <Component2 />
  </div>
</template>

<script>
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'

export default {
  name: 'Parent',
  components: {
    Component1,
    Component2
  }
}
</script>

<style>
.parent {
  margin-top: 10px;
  width: 300px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>

```

3 **Component1**
   
```html
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

<style>
.comp-1 {
  width: 265px;
  padding: 15px;
  border: 1px solid #ffa631;
}
</style>
```

4 **Component2**
   
```html
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

<style>
.comp-2 {
  width: 265px;
  padding: 15px;
  border: 1px solid #b0a4e3;
}
</style>
```