<template>
  <cc-input v-model="input" placeholder="Please input" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input,
    }
  },
}
</script>
