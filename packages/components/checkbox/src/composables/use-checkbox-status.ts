import { computed, inject, ref, toRaw, unref } from 'vue'
import { isEqual } from 'lodash-unified'
import { isArray, isBoolean, isObject } from '@cc-ui/utils'
import { useGlobalSize, useProp } from '@cc-ui/hooks'
import { checkboxGroupContextKey } from '../constants'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'
import type { ComponentSize } from '@cc-ui/constants'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined) // 传入类型 InjectionKey<T> T: CheckboxContext，默认值：CheckboxContext | undefined

  const size = useProp<ComponentSize>('size')
  const disabled = useProp<boolean>('disabled')
  const globalSize = useGlobalSize()

  const isFoucsed = ref(false)
  const isChecked = computed<boolean>(() => {
    const value = model.value
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      if (isObject(props.label)) {
        return value.map(toRaw).some((o) => isEqual(o, props.label))
      } else {
        return value.map(toRaw).includes(props.label)
      }
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  const checkboxSize = computed(
    (): ComponentSize =>
      size.value || globalSize.value || unref(checkboxGroup?.size?.value) || ''
  )

  const isDisabled = computed(
    () => disabled.value || unref(checkboxGroup?.disabled?.value) || false
  )

  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  return {
    isFoucsed,
    isChecked,
    isDisabled,
    checkboxSize,
    hasOwnLabel,
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
