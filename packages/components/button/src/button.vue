<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('round', round),
      ns.is('circle', circle),
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="icon" :class="`cc-icon-${icon}`" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'CcButton',
})

defineProps(buttonProps)

const emit = defineEmits(buttonEmits)

const ns = useNamespace('button')

const _ref = ref<HTMLButtonElement>()

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

defineExpose({
  ref: _ref,
})
</script>
