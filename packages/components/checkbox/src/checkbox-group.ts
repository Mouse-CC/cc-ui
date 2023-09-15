import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { definePropType, isArray } from '@cc-ui/utils'
import type { ComponentSize } from '@cc-ui/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxValueType } from './checkbox'
import type CheckboxGroup from './checkbox-group.vue'

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const checkboxGroupProps = {
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => [],
  },
  disabled: Boolean,
  size: String as PropType<ComponentSize>,
  tag: {
    type: String,
    default: 'div',
  },
} as const

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type ChexkboxGroupEmits = typeof checkboxGroupEmits
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>
