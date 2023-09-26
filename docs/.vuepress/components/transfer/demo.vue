<template>
  <cc-transfer v-model="value" :data="data" />
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    interface Option {
      key: number
      label: string
      disabled: boolean
    }

    const generateData = () => {
      const data: Option[] = []
      for (let i = 1; i <= 9; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }

    const data = ref<Option[]>(generateData())
    const value = ref([1, 4])
    return {
      data,
      value,
    }
  },
}
</script>
