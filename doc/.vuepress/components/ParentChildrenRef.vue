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