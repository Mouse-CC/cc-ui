import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { isBoolean, isNumber, isString } from '@cc-ui/utils'

import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentSize } from '@cc-ui/constants'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  size: String as PropType<ComponentSize>,
  label: {
    type: [String, Boolean, Number, Object],
  },
  trueLabel: {
    type: [String, Number],
    default: undefined,
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  indeterminate: Boolean, // 中间状态
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined,
  },
  border: Boolean,
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmit = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox>
