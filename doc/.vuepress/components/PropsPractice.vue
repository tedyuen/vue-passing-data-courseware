<template>
  <div class="parent-props-practice">Parent:
    <Child :list="list"/>
  </div>
</template>

<script>
import Child from "./props/ChildPractice.vue";

export default {
  name: "Parent",
  components: {
    Child
  },
  data() {
    return {
      list: ["张三", "李四", "王五"]
    };
  }
};
</script>

<style>
.parent-props-practice {
  margin-top: 10px;
  width: 140px;
  padding: 10px;
  border: 1px solid #00e09e;
}
</style>