import { createVNode, render } from 'vue'
import messageComponent from './message.vue'
import { instances } from './instance'
import type { MessageContext } from './instance'
import type { MessageHandler, MessageOption, MessageProps } from './message'

let seed = 1

const closeMessage = (instance: MessageContext) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  // 从删除 instances 删除当前 instance 并调用 close 方法
  instances.splice(idx, 1)

  const { handler } = instance
  handler.close()
}

const createMessage = (
  options: MessageOption,
  container: HTMLDivElement
): MessageContext => {
  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }

  const id = `message_${seed++}`
  const userOnClose = options.onClose

  const props = {
    ...options,
    id,
    onClose: () => {
      userOnClose?.()
      closeMessage(instance)
    },
    onDestroy: () => {
      render(null, container)
      // render 函数 当 vnode 传入为 null 时，执行 unmount 函数，卸载 之前挂载的 vnode 实现删除节点效果。
    },
  }

  // 节点
  const vnode = createVNode(messageComponent, props as MessageProps)

  // 渲染
  // render(vnode, container)
  // document.body.appendChild(container.firstElementChild!)

  // 组件
  const vm = vnode.component!

  const handler: MessageHandler = {
    close: () => {
      vm.exposed!.visible.value = false
    },
  }

  const instance: MessageContext = {
    id,
    vnode,
    vm,
    handler,
    props,
  }

  return instance
}

export default function Message(options: MessageOption): MessageHandler {
  const container = document.createElement('div')
  const instance = createMessage(options, container)

  instances.push(instance)

  render(instance.vnode, container)

  instances.forEach((ins) => {
    if (ins.id === instance.id) {
      ins.vm = instance.vnode.component!
      ins.handler = {
        close: () => {
          ins.vm.exposed!.visible.value = false
        },
      }
      ins.props = ins.vm.props
    }
  })

  document.body.appendChild(container.firstElementChild!)
  return instance.handler
}
