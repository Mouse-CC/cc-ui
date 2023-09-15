<template>
  <component :is="tag" :class="ns.b('group')" role="group">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { useNamespace } from '@cc-ui/hooks'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
import { checkboxGroupContextKey } from './constants'
import type { CheckboxGroupValueType } from './checkbox-group'

defineOptions({
  name: 'CcCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  },
})

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit('change', value)
}

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), ['size', 'disabled']),
  modelValue,
  changeEvent,
})
</script>
