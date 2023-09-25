---
title: Checkbox 多选框
---

### Checkbox 多选框

从一组备选项中选择需要的。

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮的介绍。

`checkbox-group` 元素能把多个 checkbox 管理为一组，只需在 Group 中使用 `v-mode` 绑定 `Array` 类型的变量即可。只有一个选项时默认值类型为 `Boolean`，当选中时值为 `true`。`el-checkbox` 标签中的内容将成为复选框按钮之后的描述。

:::demo

```vue
<template>
  <div>
    <cc-checkbox v-model="checked1" label="Option 1" size="large" />
    <cc-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <cc-checkbox v-model="checked3" label="Option 1" />
    <cc-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
    }
  },
}
</script>
```

:::

### 禁用状态

设置 `disabled` 属性即可。

:::demo

```vue
<template>
  <div>
    <cc-checkbox v-model="checked1" disabled>Disabled</cc-checkbox>
    <cc-checkbox v-model="checked2">Not disabled</cc-checkbox>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return {
      checked1,
      checked2,
    }
  },
}
</script>
```

:::

### 多选框组

适用于多个勾选框绑定到同一数组的场景，通过 label 控制组中选中的项。

在 `cc-checkbox` 元素中定义 `v-model` 绑定变量，单一 checkbox 默认绑定变量的类型是 `Boolean`，选中值为 `true`。在 `cc-checkbox-group` 组件中，`label` 是多择框的值。如果该组件下没有被传入内容，那么 `label` 将会作为 checkbox 按钮后的介绍。 `label` 与数组中的元素对应，如果值存在数组中，checkbox 处于选中状态，反之亦然。

:::demo

```vue
<template>
  <cc-checkbox-group v-model="checkList">
    <cc-checkbox label="Option A" />
    <cc-checkbox label="Option B" />
    <cc-checkbox label="Option C" />
    <cc-checkbox label="disabled" disabled />
    <cc-checkbox label="selected and disabled" disabled />
  </cc-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkList = ref(['selected and disabled', 'Option A'])
    return {
      checkList,
    }
  },
}
</script>
```

:::

### 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于全选效果

:::demo

```vue
<template>
  <cc-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </cc-checkbox>
  <cc-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <cc-checkbox v-for="city in cities" :key="city" :label="city">
      {{ city }}
    </cc-checkbox>
  </cc-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref(['Shanghai', 'Beijing'])
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

    const handleCheckAllChange = (val: boolean) => {
      checkedCities.value = val ? cities : []
      isIndeterminate.value = false
    }

    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }

    return {
      checkAll,
      isIndeterminate,
      checkedCities,
      cities,
      handleCheckAllChange,
      handleCheckedCitiesChange,
    }
  },
}
</script>
```

:::

### 带有边框

设置 `border` 属性可以渲染为带有边框的多选框。

:::demo

```vue
<template>
  <div>
    <cc-checkbox v-model="checked1" label="Option 1" size="large" border />
    <cc-checkbox v-model="checked2" label="Option 2" size="large" border />
  </div>
  <div class="mt-4">
    <cc-checkbox v-model="checked3" label="Option 1" border />
    <cc-checkbox v-model="checked4" label="Option 2" border />
  </div>
  <div class="mt-4">
    <cc-checkbox-group v-model="checkboxGroup1" size="small">
      <cc-checkbox label="Option 1" border />
      <cc-checkbox label="Option 2" border />
    </cc-checkbox-group>
  </div>
  <div class="mt-4">
    <cc-checkbox-group v-model="checkboxGroup1" size="small">
      <cc-checkbox label="Option 1" border disabled />
      <cc-checkbox label="Option 2" border disabled />
    </cc-checkbox-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(true)
    const checkboxGroup1 = ref(['Option 1'])
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checkboxGroup1,
    }
  },
}
</script>
```

:::
