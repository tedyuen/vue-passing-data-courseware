<!--  父组件 EventHub.vue -->
<template>
  <div class="parent-event">
    Parent
    <Component1 />
    <Component2 />
  </div>
</template>

<script>
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'

export default {
  name: 'Parent',
  components: {
    Component1,
    Component2
  }
}
</script>

<style scope>
.parent-event {
  margin-top: 10px;
  width: 300px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>
