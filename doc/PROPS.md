### 一、`Prop` 标签属性传递

> 官网路径: 学习 -> 教程 -> 基础 -> 组件基础 -> 通过 `Prop` 向子组件传递参数

#### 知识要点

1. 修改父组件text会触发子组件更新
2. `v-bind` 可以缩写成 `:`
3. 静态属性也可以通过这个方式传递
4. 子组件不可修改props，需要通过 `computed` 来处理。
5. 属性声明中可以添加类型检测
6. 属性声明中可以设置默认值
7. 多个属性的写法
8. 父组件没传值，props的值是什么? (undefined)

#### 效果

<ClientOnly>
  <Props />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<template>
  <div class="parent-props">
    Parent: <button @click="text = '三个荤菜'">传值</button>
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
      text: ''
    }
  }
}
</script>

<style>
.parent-props {
  margin-top: 10px;
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
  <div class="child-props">Child: {{myData}}</div>
</template>

<script>
export default {
  name: 'Child',
  props: ['myData']
}
</script>

<style>
.child-props {
  width: 120px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```
