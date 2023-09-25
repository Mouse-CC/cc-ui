---
title: Transfer 穿梭框
---

### Transfer 穿梭框

### 基础用法

Transfer 的数据通过 `data` 属性传入。 数据需要是一个对象数组，每个对象有以下属性：`key` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项的 `key` 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 `v-model` 绑定的变量赋予一个初始值

:::demo

```vue
<template>
  <cc-transfer v-model="value" :data="data" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    interface Option {
      key: number
      label: string
      disabled: boolean
    }

    const generateData = () => {
      const data: Option[] = []
      for (let i = 1; i <= 9; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }

    const data = ref<Option[]>(generateData())
    const value = ref([1, 4])
    return {
      data,
      value
    }
  },
}
</script>
```

:::
