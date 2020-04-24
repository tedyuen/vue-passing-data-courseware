<!-- 子组件 Child.vue -->
<template>
  <div class="child-pi-2">
    王多鱼2: <br>
    {{house}} - {{car}} - {{money}}
  </div>
</template>

<script>
export default {
  name: 'Child2',
  inject: {
    house: {
      default: '没房2'
    },
    car: {
      default: '没车2'
    },
    money: {
      default: '没票子2'
    }
  }
}
</script>

<style>
.child-pi-2 {
  width: 150px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>