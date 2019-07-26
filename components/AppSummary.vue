<template>
  <div class="container">
    <h3>Summary</h3>
    <p>counterCount:{{ counterCount }}</p>
    <p>todosCount:{{ todosCount }}</p>
    <p>todosDoneCount:{{ todosDoneCount }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    counterCount(): number {
      return this.$store.state.counter.count
    },
    todosCount(): number {
      return this.$store.getters['todos/todosCount']
    },
    todosDoneCount(): number {
      return this.$store.getters['todos/doneTodosCount']
    }
  }
})
</script>

<style scoped>
.todo {
  list-style: none;
  margin: 4px 0;
  user-select: none;
}
.todo.done {
  opacity: .2;
}
.todo.done button {
  pointer-events: none;
}
</style>
