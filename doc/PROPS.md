### 一、属性传递 `v-bind` & `Prop` (父 -> 子)

#### 效果

<ClientOnly>
  <Props />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<!-- 父组件 -->
<template>
  <div class="parent-props">
    Parent: 
    <Child myData="父组件数据"/>
  </div>
</template>

<script>
import Child from './props/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  }
}
</script>

<style>
.parent-props {
  margin-top: 10px;
  width: 140px;
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
  width: 130px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```

::: details 课堂练习
在父组件中添加下列响应式的列表数据，创建一个名为 `List` 的组件，包含以 `ul > li` 组成的列表子组件，并显示该列表数据中的内容。

提示：
1. 用指令 `v-if` 来实现列表
2. 数组数据的类型是 `Array`

```js
data() {
  return {
    list: [
      '张三',
      '李四',
      '王五'
    ]
  }
}
```

效果如下：

<ClientOnly>
  <PropsPractice />
</ClientOnly>

:::