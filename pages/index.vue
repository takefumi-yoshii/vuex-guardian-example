<template>
  <div class="wrapper">
    <AppTodos />
    <AppCounter />
    <AppSummary />
  </div>
</template>

<script>
import AppTodos from '../components/AppTodos.vue'
import AppCounter from '../components/AppCounter.vue'
import AppSummary from '../components/AppSummary.vue'
export default {
  components: {
    AppTodos,
    AppCounter,
    AppSummary
  }
}
</script>

<style scoped>
.wrapper {
  padding: 40px;
}
.wrapper > * {
  margin-bottom: 40px;
}
</style>
