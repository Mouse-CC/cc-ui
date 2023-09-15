import { buildProps, definePropType } from '@cc-ui/utils'
import { tranferCheckedChangeFn, transferProps } from './transfer'

import type { ExtractPropTypes, VNode } from 'vue'
import type { TransferDataItem, TransferKey } from './transfer'
import type TransferPanel from './transfer-panel.vue'

export interface TransferPanelState {
  checked: TransferKey[]
  allChecked: boolean
  query: string
  checkChangeByUser: boolean
}

export const CHECKED_CHANGE_EVENT = 'checked-change'

export const transferPanelProps = buildProps({
  data: transferProps.data,
  optionRender: {
    type: definePropType<(option: TransferDataItem) => VNode | VNode[]>(
      Function
    ),
  },
  placeholder: String,
  title: String,
  format: transferProps.format,
  filterMethod: transferProps.filterMethod,
  defaultChecked: transferProps.leftDefaultChecked,
  props: transferProps.props,
} as const)

export type TransferPanelProps = ExtractPropTypes<typeof transferPanelProps>

export const transferPanelEmits = {
  [CHECKED_CHANGE_EVENT]: tranferCheckedChangeFn,
}

export type TransferPanelEmits = typeof transferPanelEmits

export type TransferPanelInstance = InstanceType<typeof TransferPanel>
