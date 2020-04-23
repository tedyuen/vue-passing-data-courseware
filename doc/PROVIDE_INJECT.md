### 五、`provide` 和 `inject`

> 官网路径: 
> 1. 学习 -> 教程 -> 深入了解组件 -> 处理边界情况 -> 依赖注入
> 2. 学习 -> API -> 选项/组合 -> provide/inject

#### 效果

<ClientOnly>
  <ProvideInject />
</ClientOnly>

#### 代码演示

1. **父组件**

```html
<template>
  <div class="parent-pi">
    二爷
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  provide: {
    house: '别墅',
    car: '跑车',
    money: '10个亿'
  }
}
</script>

<style>
.parent-pi {
  margin-top: 10px;
  width: 160px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
```

2. **子组件**

```html
<!-- 子组件 Child.vue -->
<template>
  <div class="child-pi">
    王多鱼: <br>
    {{house}} - {{car}} - {{money}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  inject: {
    house: {
      default: '没房'
    },
    car: {
      default: '没车'
    },
    money: {
      default: '没票子'
    }
  }
}
</script>

<style>
.child-pi {
  width: 150px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>
```