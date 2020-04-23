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