### 四、`$attrs` 和 `$listeners`

> `$attrs`官网路径: 学习 -> API -> 实例属性 -> `vm.$attrs`
> `$listeners`官网路径: 学习 -> API -> 实例属性 -> `vm.$listeners`
> 或者直接搜索

* `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (`class` 和 `style` 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (`class` 和 `style` 除外)，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 `interitAttrs` 选项一起使用。
* `$listeners`：包含了父作用域中的 (不含 `.native` 修饰器的) `v-on` 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件