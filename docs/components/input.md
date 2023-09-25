---
title: Input 输入框
---

### Input 输入框

输入字符。

### 基础用法

:::demo

```vue
<template>
  <cc-input v-model="input" placeholder="Please input" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input,
    }
  },
}
</script>
```

:::

### 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

:::demo

```vue
<template>
  <cc-input v-model="input" placeholder="Please input" disabled />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input,
    }
  },
}
</script>
```

:::

### 一键清空

通过 `clearable` 属性，输入后得到点击清空输入框的按钮

:::demo

```vue
<template>
  <cc-input v-model="input" placeholder="Please input" clearable />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input,
    }
  },
}
</script>
```

:::

### 密码框

通过 `show-password` 属性，输入后得到点击清空输入框的按钮

:::demo

```vue
<template>
  <cc-input
    v-model="input"
    type="password"
    placeholder="Please input password"
    show-password
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input = ref('')
    return {
      input,
    }
  },
}
</script>
```

:::

### 尺寸

使用 `size` 属性改变输入框的大小。除了默认大小外，还有另外两个选项：`large`，`small`。

:::demo

```vue
<template>
  <div class="demo-input-size">
    <cc-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
    />
    <cc-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
    <cc-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="demo-input-size">
    <cc-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :suffix-icon="'search'"
    />
    <cc-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :suffix-icon="'search'"
    />
    <cc-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :suffix-icon="'search'"
    />
  </div>
  <div class="demo-input-size">
    <cc-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :prefix-icon="'search'"
    />
    <cc-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Please Input"
      :prefix-icon="'search'"
    />
    <cc-input
      v-model="input3"
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :prefix-icon="'search'"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const input1 = ref('')
    const input2 = ref('')
    const input3 = ref('')
    return {
      input1,
      input2,
      input3,
    }
  },
}
</script>
```

:::
