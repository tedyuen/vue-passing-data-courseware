### 常用组件通讯的方式

1. `Props` (父组件向子组件传值，常用)
2. 事件侦听 `v-on` + `$emit` (子组件通过事件形式向父组件传值，常用)
3. 事件中心管理事件侦听 `EventHub` (跨多层父子组件通讯，常用)
4. `vuex` (中心化状态管理方案，大型单页应用常用)
5. `$attrs` 和 `$listeners`(封装基础组件时常用)
6. 依赖注入 `provide` + `inject`(高阶组件/组件库用的多)
7. `$parent` 和 `$children` 和 `refs` (直接访问组件实例，不推荐使用)

<img :src="$withBase('/images/mind.png')" alt="思维导图" />