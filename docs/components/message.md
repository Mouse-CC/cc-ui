---
title: Message 消息提示
---

### Message 消息提示

常用于主动操作后的反馈提示。

### 基础用法

自顶部出现，3 秒后自动消失。

:::demo

```vue
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
```

:::

### 不同状态

传递 `type` 包含：success | warning | info | error

:::demo

```vue
<template>
  <cc-button :plain="true" @click="open2">success</cc-button>
  <cc-button :plain="true" @click="open3">warning</cc-button>
  <cc-button :plain="true" @click="open1">message</cc-button>
  <cc-button :plain="true" @click="open4">error</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const open1 = () => {
      CcMessage('this is a message.')
    }
    const open2 = () => {
      CcMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    }
    const open3 = () => {
      CcMessage({
        message: 'Warning, this is a warning message.',
        type: 'warning',
      })
    }
    const open4 = () => {
      CcMessage({
        message: 'Oops, this is a error message.',
        type: 'error',
      })
    }
    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
}
</script>
```

:::

### 文字居中

使用 `center` 属性让文字水平居中。

:::demo

```vue
<template>
  <cc-button @click="openCenter">Centered text</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const openCenter = () => {
      CcMessage({
        message: 'Centered text',
        center: true,
      })
    }
    return {
      openCenter,
    }
  },
}
</script>
```

:::

### 使用 HTML 片段作为正文内容

`message` 还支持使用 HTML 字符串作为正文内容。

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 就会被当作 HTML 片段处理。

:::demo

```vue
<template>
  <cc-button @click="openHTML">Use HTML String</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const openHTML = () => {
      CcMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
      })
    }
    return {
      openHTML,
    }
  },
}
</script>
```

:::

::: warning
`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) 攻击。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的。
:::
