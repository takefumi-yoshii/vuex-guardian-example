<template>
  <li class="todo" v-bind:class="{ done: data.done }">
    <button v-on:click="doneTodo">done</button>
    <span>{{ data.task }}</span>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Todo } from '../store/todos/index'
export default Vue.extend({
  props: { data: Object as PropType<Todo> },
  methods: {
    doneTodo(){
      this.$store.dispatch('todos/acyncDoneTodo', { id: this.data.id })
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
.dateLabel {
  display: inline-block;
  width: 80px;
  padding: 4px;
  font-size: 10px;
  border-radius: 3px;
  color: #fff;
  background-color: #4bbd9f;
}
</style>
