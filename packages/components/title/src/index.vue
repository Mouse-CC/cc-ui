<template>
  <h1 :style="style">
    <i v-if="icon" :class="`cc-icon-${icon}`" />
    <slot> {{ msg }}</slot>
  </h1>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

defineOptions({
  name: 'CcTitle',
})

defineProps<{
  msg?: string
  icon?: string
  style?: StyleValue
}>()
</script>

<style scoped lang="scss">
h1 {
  color: #00a0ff;
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  > i {
    margin-right: 10px;
  }
}
</style>
