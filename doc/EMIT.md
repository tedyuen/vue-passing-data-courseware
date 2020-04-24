### 二、`v-on` & `$emit`

> 官网路径: 学习 -> 教程 -> 基础 -> 组件基础 -> 监听子组件事件

#### 知识要点

1. `v-on` 可以简写成 `@`
2. 事件处理函数是一个方法写法
3. 如何传递多参数

#### 效果

<ClientOnly>
  <Emit />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<!--  父组件 Parent.vue -->
<template>
  <div class="parent-emit">
    <!-- 绑定事件到子组件上 -->
    Parent
    <Child v-on:changeDate="parentData += $event"/>
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
  }
}
</script>

<style>
.parent-emit {
  margin-top: 10px;
  width: 130px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
```

2. **子组件**

```html
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
      this.$emit('myEvent', '参数1')
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
```