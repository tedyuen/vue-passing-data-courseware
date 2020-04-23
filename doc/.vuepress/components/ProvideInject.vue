<template>
  <div class="parent-pi">
    亲爷
    <Child />
  </div>
</template>

<script>
import Child from './pi/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  provide: {
    // house: '别墅',
    // car: '跑车',
    // money: '10个亿'
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