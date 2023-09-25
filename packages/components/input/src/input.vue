<template>
  <div :class="containerKls">
    <div ref="wrapperRef" :class="wrapperKls">
      <!-- prefix slot -->
      <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
        <span :class="nsInput.e('prefix-inner')">
          <slot name="prefix" />
          <i
            v-if="prefixIcon"
            :class="[`cc-icon-${String(prefixIcon)}`, nsInput.e('icon')]"
          />
        </span>
      </span>

      <input
        ref="input"
        :disabled="disabled"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :class="nsInput.e('inner')"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
      />

      <!-- suffix slot -->
      <span v-if="suffixVisible" :class="nsInput.e('suffix')">
        <span :class="nsInput.e('suffix-inner')">
          <template v-if="!showClear || !showPwdVisible">
            <slot name="suffix" />
            <i
              v-if="suffixIcon"
              :class="[`cc-icon-${String(suffixIcon)}`, nsInput.e('icon')]"
            />
          </template>
          <i
            v-if="showClear"
            :class="['cc-icon-close-circle', nsInput.e('icon')]"
            @mousedown.prevent="NOOP"
            @click="clear"
          />
          <i
            v-if="showPwdVisible"
            :class="[`cc-icon-${passwordIcon}`, nsInput.e('icon')]"
            @click="handlePasswordVisible"
          />
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  useSlots,
  watch,
} from 'vue'
import { isNil } from 'lodash-unified'
import { useFocusController, useNamespace, useProp } from '@cc-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { NOOP } from '@cc-ui/utils'
import { inputEmits, inputProps } from './input'
import type { ComponentSize } from '@cc-ui/constants'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'CcInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()

const nsInput = useNamespace('input')

const containerKls = computed(() => [
  nsInput.b(),
  nsInput.m(inputSize.value),
  nsInput.is('disabled', inputDisabled.value),
])

const wrapperKls = computed(() => [
  nsInput.e('wrapper'),
  nsInput.is('focus', isFocused.value),
])

const inputSize = useProp<ComponentSize>('size')
const inputDisabled = useProp<boolean>('disabled')

const input = shallowRef<HTMLInputElement>()

const passwordVisible = ref(false)
const isComposing = ref(false)

const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue)
)
const showClear = computed(
  () =>
    props.clearable &&
    !inputDisabled.value &&
    !!nativeInputValue.value &&
    isFocused.value
)
const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !inputDisabled.value &&
    !!nativeInputValue.value &&
    (!!nativeInputValue.value || isFocused.value)
)

const suffixVisible = computed(
  () =>
    !!slots.suffix ||
    !!props.suffixIcon ||
    showClear.value ||
    props.showPassword
)

const _ref = computed(() => input.value)

const { wrapperRef, isFocused, handleFocus } = useFocusController(_ref)

const passwordIcon = computed(() =>
  passwordVisible.value ? 'eye' : 'eye-close'
)

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === nativeInputValue.value) return
  input.value = nativeInputValue.value
}

const focus = async () => {
  await nextTick()
  _ref.value?.focus()
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

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
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

const clear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
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
