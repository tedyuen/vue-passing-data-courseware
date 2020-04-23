### 四、`$attrs` 和 `$listeners`

> - `$attrs`官网路径: 学习 -> API -> 实例属性 -> `vm.$attrs`
> - `$listeners`官网路径: 学习 -> API -> 实例属性 -> `vm.$listeners`

* `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 `interitAttrs` 选项一起使用。
* `$listeners`：包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

#### 效果

<ClientOnly>
  <AttrsListeners />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
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
```

2. **Child1**

```html
<!-- 子组件1 Child1.vue -->
<template>
  <div class="child-1">Child1
    <br>
    <button v-on:click="postEvent">child1触发事件</button>
    <br>
    foo: {{foo}}
    <Child2
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Child2 from "./Child2.vue";

export default {
  name: "Child1",
  components: {
    Child2
  },
  inheritAttrs: false,
  props: {
    foo: String,
  },
  methods: {
    postEvent() {
      this.$emit('event1', 'Child1')
      this.$emit('event2', 'Child1')
    }
  }
};
</script>

<style>
.child-1 {
  width: 130px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```

3. **Child2**
   
```html
<!-- 子组件2 Child2.vue -->
<template>
  <div class="child-2">Child2
    <br>
    <button v-on:click="postEvent">child2触发事件</button>
    <br>
    goo: {{goo}}
  </div>
</template>

<script>
export default {
  name: "Child2",
  props: {
    goo: String
  },
  methods: {
    postEvent() {
      this.$emit('event2', 'Child2')
    }
  }
};
</script>

<style>
.child-2 {
  width: 120px;
  padding: 5px;
  border: 1px solid #b0a4e3;
}
</style>
```