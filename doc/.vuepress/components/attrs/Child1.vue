<!-- 子组件1 Child1.vue -->
<template>
  <div class="child-1">Child1
    <br>
    <button v-on:click="postEvent">child1触发事件</button>
    <br>
    foo: {{foo}}
    <Child2
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Child2 from "./Child2.vue";

export default {
  name: "Child1",
  components: {
    Child2
  },
  inheritAttrs: false,
  props: {
    foo: String,
  },
  methods: {
    postEvent() {
      this.$emit('event1', 'Child1')
      this.$emit('event2', 'Child1')
    }
  }
};
</script>

<style>
.child-1 {
  width: 130px;
  padding: 5px;
  border: 1px solid #ff8c31;
}
</style>