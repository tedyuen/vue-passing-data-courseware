### 六、`$parent` 和 `$children` 和 `ref`

> 官网路径: 学习 -> API -> 选项/组合 -> parent

#### 知识要点

1. `$parent` 父实例，如果当前实例有的话。
2. `$children` 是子组件实例数组，排序不可靠。
3. `$refs` 一个对象，持有注册过 `ref attribute` 的所有 DOM 元素和组件实例。
4. 直接访问父子组件实例，不推荐使用。

#### 效果

<ClientOnly>
  <ParentChildrenRef />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<template>
  <!-- 父组件 Parent.vue -->
  <div class="parent-pcr">
    Parent<br>
    <button @click="callChildsMethod">children调用子组件方法</button>
    <button @click="callChildsRef">ref调用子组件方法</button>
    <br>
    {{childData1}}
    <br>
    {{childData2}}
    <br>
    <Child ref="son"/>
  </div>
</template>

<script>
import Child from './pcr/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      str: '父组件属性',
      childData1: '',
      childData2: ''
    }
  },
  mounted() {
    this.childData1 = `$children获取:${this.$children[0].str}`
    this.childData2 = `$refs获取:${this.$refs.son.str}`
  },
  methods: {
    callChildsMethod() {
      this.$children[0].doChildMethod('$children')
    },
    callChildsRef() {
      this.$refs.son.doChildMethod('$refs')
    },
    doParentMethod() {
      alert('被子组件调用了')
    }
  }
}
</script>

<style>
.parent-pcr {
  margin-top: 10px;
  width: 200px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
```

2. **子组件**

```html
<template>
  <!-- 子组件 Child.vue -->
  <div class="child-pcr">
    Child: <br>
    <button @click="callParentMethod">调用父组件方法</button>
    <br>
    {{parentData}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return  {
      parentData: '',
      str: '子组件属性'
    }
  },
  mounted() {
    this.parentData = this.$parent.str
  },
  methods: {
    doChildMethod(str) {
      alert(`被父组件${str}调用到了`)
    },
    callParentMethod() {
      this.$parent.doParentMethod()
    }
  }
}
</script>

<style>
.child-pcr {
  width: 150px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```