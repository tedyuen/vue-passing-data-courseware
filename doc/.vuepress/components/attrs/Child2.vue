<!-- 子组件2 Child2.vue -->
<template>
  <div class="child-2">Child2
    <br>
    <button v-on:click="postEvent">child2触发事件</button>
    <br>
    goo: {{goo}}
  </div>
</template>

<script>
export default {
  name: "Child2",
  props: {
    goo: String
  },
  methods: {
    postEvent() {
      this.$emit('event2', 'Child2')
    }
  }
};
</script>

<style>
.child-2 {
  width: 120px;
  padding: 5px;
  border: 1px solid #b0a4e3;
}
</style>