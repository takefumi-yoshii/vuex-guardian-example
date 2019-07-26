<template>
  <form v-on:submit.prevent="addTodo">
    <input type="text" v-model="task" />
    <button>addTodo</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({ task: '' }),
  methods: {
    async addTodo() {
      await this.$store.dispatch('todos/acyncAddTodo', this.task)
      this.task = ''
    }
  }
})
</script>
