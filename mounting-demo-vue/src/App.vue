<template>
  <h1>The 'mounted' Lifecycle Hook</h1>
  <button @click="this.activeComp = !this.activeComp">Create component</button>
  <div>
    <comp-one v-if="activeComp"></comp-one>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: false
    }
  }
}
</script>

<style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 400px;
    background-color: lightgreen;
  }
</style> 
