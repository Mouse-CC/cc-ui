<template>
  <cc-button @click="open">Show message</cc-button>
  <cc-button @click="openVn">VNode</cc-button>
</template>

<script>
import { h } from 'vue'
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const open = () => {
      CcMessage('this is a message.')
    }

    const openVn = () => {
      CcMessage({
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
      })
    }
    return {
      open,
      openVn,
    }
  },
}
</script>
