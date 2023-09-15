import { isString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

export const inputProps = {
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default: '',
  },
  disabled: Boolean,
  autocomplate: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
} as const

export type InuptProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
