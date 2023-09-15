<template>
  <div :class="[nsInput.b(), nsInput.is('disabled', disabled)]">
    <div :class="nsInput.e('wrapper')">
      <input
        ref="input"
        :disabled="disabled"
        :placeholder="placeholder"
        :autocomplate="autocomplate"
        :type="type"
        :class="nsInput.e('inner')"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @blur="handleBlur"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, shallowRef, watch } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { inputEmits, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'CcInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const nsInput = useNamespace('input')

const input = shallowRef<HTMLInputElement>()

const isComposing = ref(false)

const _ref = computed(() => input.value)
const nativeInputValue = computed(() =>
  !props.modelValue ? '' : String(props.modelValue)
)

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement
  if (isComposing.value) return
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  setNativeInputValue()
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}

onMounted(() => {
  setNativeInputValue()
})

watch(
  () => props.modelValue,
  () => {
    setNativeInputValue()
  }
)
</script>
