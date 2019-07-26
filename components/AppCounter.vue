<template>
  <div class="container">
    <h3>Counter</h3>
    <span>{{ counterCount }}</span>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    counterCount(): number {
      return this.$store.state.counter.count
    },
    counterCountExpo2(): number {
      return this.$store.getters['counter/expo'](2)
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('counter/acyncIncrement')
    },
    decrement() {
      this.$store.dispatch('counter/acyncDecrement')
    }
  }
})
</script>
