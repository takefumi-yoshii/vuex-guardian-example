<template>
  <ul>
    <AppTodosItem
      v-for="todo in todos"
      v-bind:key="todo.id"
      :data="todo"
     />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Todo } from '../store/todos/index'
import AppTodosItem from './AppTodosItem.vue'
export default Vue.extend({
  components: { AppTodosItem },
  computed: {
    todos(): Todo[] {
      return this.$store.state.todos.todos
    }
  }
})
</script>

<style scoped>
ul {
  padding: 0;
}
</style>
