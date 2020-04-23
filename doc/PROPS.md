### 一、`Prop` 标签属性传递

> 官网路径: 学习 -> 教程 -> 基础 -> 组件基础 -> 通过 `Prop` 向子组件传递参数

#### 效果

<ClientOnly>
  <Props />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<!-- 父组件 Parent.vue -->
<template>
  <div class="parent">
    Parent
    <Child v-bind:myData="text"/>
  </div>
</template>

<script>
import Child from './props/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      text: '三个荤菜'
    }
  }
}
</script>

<style>
.parent {
  width: 130px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
```

1. **子组件**

```html
<!-- 子组件 Child.vue -->
<template>
  <div class="child">Child: {{myData}}</div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    myData: String
  }
}
</script>

<style>
.child {
  width: 120px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```
