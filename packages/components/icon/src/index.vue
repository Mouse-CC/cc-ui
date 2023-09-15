<template>
  <i :class="`cc-icon-${name}`" />
</template>

<script lang="ts">
export default {
  name: 'CcIcon',
}
</script>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style lang="scss" scoped></style>
