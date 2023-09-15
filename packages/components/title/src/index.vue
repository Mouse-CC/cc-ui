<template>
  <h1 :style="style">
    <span>
      <slot name="icon" />
    </span>
    <slot> {{ msg }}</slot>
  </h1>
</template>
<script lang="ts"></script>
<script setup lang="ts">
import type { StyleValue } from 'vue'

defineOptions({
  name: 'CcTitle',
})

defineProps<{
  msg?: string
  style?: StyleValue
}>()
</script>
<style scoped lang="scss">
h1 {
  color: #00a0ff;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
  > span {
    display: flex;
    margin-right: 5px;
    align-items: center;
  }
}
</style>
