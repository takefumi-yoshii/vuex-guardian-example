<template>
  <div class="container">
    <h3>Todos</h3>
    <AppTodosForm />
    <AppTodosList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppTodosForm from './AppTodosForm.vue'
import AppTodosList from './AppTodosList.vue'
export default Vue.extend({
  components: { AppTodosForm, AppTodosList },
  computed: {
    todosCount(): number {
      return this.$store.getters['todos/todosCount']
    },
    doneCount(): number {
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
