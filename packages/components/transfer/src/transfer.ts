import { isNil } from 'lodash-unified'
import { buildProps, definePropType, isArray, mutable } from '@cc-ui/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@cc-ui/constants'

import type Transfer from './transfer.vue'
import type { ExtractPropTypes, h as H, VNode } from 'vue'

export type TransferKey = string | number
export type TransferDirection = 'left' | 'right'

export type TransferDataItem = Record<string, any>

export type renderContent = (
  h: typeof H,
  option: TransferDataItem
) => VNode | VNode[]

export interface TransferFormat {
  noChecked?: string
  hasChecked?: string
}

export interface TransferPropsAlias {
  // 别名
  label?: string
  key?: string
  disabled?: string
}
export interface TransferCheckedState {
  leftChecked: TransferKey[]
  rightChecked: TransferKey[]
}

export const LEFT_CHECK_CHANGE_EVENT = 'left-check-change-event'
export const RIGHT_CHECK_CHANGE_EVNET = 'right-check-change-evnet'

export const transferProps = buildProps({
  data: {
    // 数据源
    type: definePropType<TransferDataItem[]>(Array),
    default: () => [],
  },
  titles: {
    type: definePropType<[string, string]>(Array),
    default: () => [],
  },
  buttonTexts: {
    type: definePropType<[string, string]>(Array),
    default: () => [],
  },
  filterPlaceholder: String,
  filterMethod: {
    type: definePropType<(query: string, item: TransferDataItem) => boolean>(
      Function
    ),
  },
  leftDefaultChecked: {
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  rightDefaultChecked: {
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  renderContent: {
    type: definePropType<renderContent>(Function),
  },
  modelValue: {
    // 右侧列表数据
    type: definePropType<TransferKey[]>(Array),
    default: () => [],
  },
  format: {
    type: definePropType<TransferFormat>(Object),
    default: () => ({}),
  },
  props: {
    type: definePropType<TransferPropsAlias>(Object),
    default: () =>
      mutable({ label: 'label', key: 'key', disabled: 'disabled' } as const),
  },
  targetOrder: {
    type: String,
    values: ['original', 'push', 'unshift'],
    default: 'original',
  },
} as const)

export type TransferProps = ExtractPropTypes<typeof transferProps>

export const tranferCheckedChangeFn = (
  value: TransferKey[],
  movedKeys?: TransferKey[]
) => [value, movedKeys].every(isArray) || (isArray(value) && isNil(movedKeys))

export const transferEmits = {
  [CHANGE_EVENT]: (
    value: TransferKey[],
    direction: TransferDirection,
    movedKeys: TransferKey[]
  ) =>
    [value, movedKeys].every(isArray) && ['left', 'right'].includes(direction),
  [UPDATE_MODEL_EVENT]: (value: TransferKey[]) => isArray(value),
  [LEFT_CHECK_CHANGE_EVENT]: tranferCheckedChangeFn,
  [RIGHT_CHECK_CHANGE_EVNET]: tranferCheckedChangeFn,
}

export type TransferEmits = typeof transferEmits

export type TransferInstance = InstanceType<typeof Transfer>
