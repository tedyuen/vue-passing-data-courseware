<!-- 子组件 Child.vue -->
<template>
  <div>
    <input type="text" v-model="text"/>
    <button @click="doAdd">Add</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      text: ''
    }
  },
  methods: {
    doAdd() {
      if(this.text) {
        this.$emit('addItem', this.text)
        this.text = ''
      }
    }
  }
};
</script>

