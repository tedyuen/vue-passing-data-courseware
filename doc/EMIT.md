### 二、`v-on` & `$emit`

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
    <Child v-on:changeData="parentData += $event"/>
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
      this.$emit('changeData', '新数据')
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

::: details 课堂练习
1. 基于上一章的课堂练习，在父组件创建一个名为Input的组件，包含一个输入框(`input`)和一个名为Add的按钮(`button`)
2. 当输入框有内容时，点击Add按钮就把输入框的内容添加到List中。
3. `List`组件中的每一列表项后，添加一个名为Del的按钮。
4. 当点击Del按钮是，则在List中把这一项数据删除。

效果如下：

<ClientOnly>
  <EmitPractice />
</ClientOnly>

:::