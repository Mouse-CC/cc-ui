---
title: 布局
---

### Layout 布局

通过基础的 24 分栏，简便的创建布局。

::: tip
TIP
组件默认使用 Flex 布局。<br>
请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。
:::

### 基础布局

使用列创建基础布局

使用 `row` 和 `col` 组件，并通过 col 组件的 `span` 属性自由的组合布局。

:::demo

```vue
<template>
  <cc-row>
    <cc-col :span="24" class="grid-content purple-dark" />
  </cc-row>
  <cc-row>
    <cc-col :span="12" class="grid-content purple" />
    <cc-col :span="12" class="grid-content purple-light" />
  </cc-row>
  <cc-row>
    <cc-col :span="8" class="grid-content purple" />
    <cc-col :span="8" class="grid-content purple-light" />
    <cc-col :span="8" class="grid-content purple" />
  </cc-row>
  <cc-row>
    <cc-col :span="6" class="grid-content purple" />
    <cc-col :span="6" class="grid-content purple-light" />
    <cc-col :span="6" class="grid-content purple" />
    <cc-col :span="6" class="grid-content purple-light" />
  </cc-row>
  <cc-row>
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content purple-light" />
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content purple-light" />
    <cc-col :span="4" class="grid-content purple" />
    <cc-col :span="4" class="grid-content purple-light" />
  </cc-row>
</template>

<style scope lang="scss">
.cc-row {
  margin-bottom: 20px;
}
.cc-row:last-child {
  margin-bottom: 0;
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
```

:::

### 混合布局

:::demo

```vue
<template>
  <cc-row :gutter="20">
    <cc-col :span="16"><div class="grid-content purple" /></cc-col>
    <cc-col :span="8"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="8"><div class="grid-content purple" /></cc-col>
    <cc-col :span="8"><div class="grid-content purple" /></cc-col>
    <cc-col :span="4"><div class="grid-content purple" /></cc-col>
    <cc-col :span="4"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="4"><div class="grid-content purple" /></cc-col>
    <cc-col :span="16"><div class="grid-content purple" /></cc-col>
    <cc-col :span="4"><div class="grid-content purple" /></cc-col>
  </cc-row>
</template>
```

:::

### 列偏移

您可以指定列偏移量。

通过指定 col 组件的 `offset` 属性可以指定偏移的栏数。

:::demo

```vue
<template>
  <cc-row :gutter="20">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6" :offset="6">
      <div class="grid-content purple" />
    </cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="6" :offset="6">
      <div class="grid-content purple" />
    </cc-col>
    <cc-col :span="6" :offset="6">
      <div class="grid-content purple" />
    </cc-col>
  </cc-row>
  <cc-row :gutter="20">
    <cc-col :span="12" :offset="12">
      <div class="grid-content purple" />
    </cc-col>
  </cc-row>
</template>
```

:::

### 对齐方式

默认使用 flex 布局来对分栏进行灵活的对齐。

您可以通过 `justify` 属性来定义子元素的排版方式，其取值为 start、center、end、space-between、space-around、space-evenly

:::demo

```vue
<template>
  <cc-row class="row-bg">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row class="row-bg" justify="center">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row class="row-bg" justify="end">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row class="row-bg" justify="space-between">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row class="row-bg" justify="space-around">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
  <cc-row class="row-bg" justify="space-evenly">
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple-light" /></cc-col>
    <cc-col :span="6"><div class="grid-content purple" /></cc-col>
  </cc-row>
</template>

<style scope lang="scss">
.row-bg {
  padding: 10px 0;
  background: #f9fafc;
}
</style>
```

:::
