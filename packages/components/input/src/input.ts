import { isString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { iconPropType } from '@cc-ui/utils'
import { useSizeProp } from '@cc-ui/hooks'
import type { ExtractPropTypes, PropType } from 'vue'
import type Input from './input.vue'

export const inputProps = {
  id: {
    type: String,
    default: undefined,
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Object] as PropType<string | number | object>,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  suffixIcon: {
    type: iconPropType,
  },
  prefixIcon: {
    type: iconPropType,
  },
} as const

export type InuptProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  clear: () => true,
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}

export type InputEmits = typeof inputEmits

export type InputInstance = InstanceType<typeof Input>
