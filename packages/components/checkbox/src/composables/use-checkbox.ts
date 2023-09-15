import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'
import { useCheckboxEvent } from './use-checknox-event'
import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from './../checkbox'

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots']
) => {
  const { model } = useCheckboxModel(props)

  const { isFoucsed, isChecked, isDisabled, checkboxSize, hasOwnLabel } =
    useCheckboxStatus(props, slots, { model })
  const { handleChange } = useCheckboxEvent()

  return {
    isChecked,
    isFoucsed,
    isDisabled,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
  }
}
