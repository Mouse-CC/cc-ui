---
title: 布局
---

### Layout 布局

通过基础的 24 分栏，简便的创建布局。

> TIP <br>
> 组件默认使用 Flex 布局。 <br>
> 请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满

### 基础布局

使用列创建基础布局

使用 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性自由的组合布局。

:::demo

```vue
<template>
  <cc-row>
    <cc-col :span="24" class="grid-content dark" />
  </cc-row>
  <cc-row>
    <cc-col :span="12" class="grid-content purple" />
    <cc-col :span="12" class="grid-content light" />
  </cc-row>
  <cc-row>
    <cc-col :span="8" class="grid-content purple" />
    <cc-col :span="8" class="grid-content light" />
    <cc-col :span="8" class="grid-content purple" />
  </cc-row>
  <cc-row>
    <cc-col :span="6" class="grid-content purple" />
    <cc-col :span="6" class="grid-content light" />
    <cc-col :span="6" class="grid-content purple" />
    <cc-col :span="6" class="grid-content light" />
  </cc-row>
  <cc-row>
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content light" />
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content light" />
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content light" />
  </cc-row>
</template>

<style scope lang="scss">
.cc-row {
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.dark {
  background: #99a9bf;
}
.light {
  background: #e5e9f2;
}
.purple {
  background: #d3dce6;
}
.row {
  background: #f9fafc;
}
</style>
```

:::

### 分栏间隔

支持列间距

行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

:::demo

```vue
<template>
  <cc-row :gutter="20">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
</template>

<style scope lang="scss">
.cc-row {
  margin-bottom: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.dark {
  background: #99a9bf;
}
.light {
  background: #e5e9f2;
}
.purple {
  background: #d3dce6;
}
.row {
  background: #f9fafc;
}
</style>
```

:::
