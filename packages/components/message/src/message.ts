import { definePropType } from '@cc-ui/utils'
import type { ExtractPropTypes, PropType, VNode } from 'vue'
import type MessageComponent from './message.vue'

type MessageTypes = 'success' | 'warning' | 'error' | 'info'

export interface messageProps {
  id?: string
  customClass?: string
  message?: string
  type?: MessageTypes
  duration?: number
  offset?: number
  zIndex?: number
  center?: boolean
  dangerouslyUseHTMLString?: boolean
  onClose?: () => void
}

export interface MessageHandler {
  close: () => void
}

export const messageProp = {
  id: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function,
    ]),
    default: '',
  },
  type: {
    type: String as PropType<MessageTypes>,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 3000,
  },
  offset: {
    type: Number,
    default: 16,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  center: {
    type: Boolean,
    default: false,
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: definePropType<() => void>(Function),
    required: false,
  },
} as const

export type MessageProps = ExtractPropTypes<messageProps>

export type MessageOption = MessageProps | string

export const messageEmits = {
  destroy: () => true,
}

export type MessageEmits = typeof messageEmits

export type MessageComponentInstance = InstanceType<typeof MessageComponent>
