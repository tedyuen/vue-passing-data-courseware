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