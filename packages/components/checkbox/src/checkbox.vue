<template>
  <component :is="!hasOwnLabel ? 'span' : 'label'" :class="labSty">
    <span
      :class="spanSty"
      :role="indeterminate ? 'checkbox' : undefined"
      :aria-checked="indeterminate ? 'mixed' : undefined"
    >
      <input
        v-model="model"
        :class="ns.e('original')"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        @focus="isFoucsed = true"
        @blur="isFoucsed = false"
        @change="handleChange"
        @click.stop
      />
      <span :class="ns.e('inner')" />
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './composables'

defineOptions({
  name: 'CcCheckbox',
})

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)
const slots = useSlots()

const {
  isChecked,
  isFoucsed,
  isDisabled,
  checkboxSize,
  model,
  hasOwnLabel,
  handleChange,
} = useCheckbox(props, slots)

const ns = useNamespace('checkbox')

const labSty = computed(() => {
  return [
    ns.b(),
    ns.m(checkboxSize.value),
    ns.is('disabled', isDisabled.value),
    ns.is('bordered', props.border),
    ns.is('checked', isChecked.value),
  ]
})

const spanSty = computed(() => {
  return [
    ns.e('input'),
    ns.is('disabled', isDisabled.value),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('focus', isFoucsed.value),
  ]
})
</script>
