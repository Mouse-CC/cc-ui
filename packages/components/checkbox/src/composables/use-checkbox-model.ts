import { computed, getCurrentInstance, inject, ref } from 'vue'
import { isArray, isUndefined } from '@cc-ui/utils'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()! // getCurrentInstance() 获取组件实例
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    },
  })

  return {
    model,
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
