<!-- 子组件 Child.vue -->
<template>
  <div class="child-pi">
    王多鱼: <br>
    {{house}} - {{car}} - {{money}}
    <!-- <Child2 /> -->
  </div>
</template>

<script>
// import Child2 from './Child2.vue'

export default {
  name: 'Child',
  // components: {
  //   Child2
  // },
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