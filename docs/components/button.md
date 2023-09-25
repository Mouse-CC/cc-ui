---
title: Button 按钮
---

### Button 按钮

常用的按钮

:::demo 使用`type`、`round`、`circle`属性来定义 Button 的样式。

```vue
<template>
  <cc-row class="mb-4">
    <cc-button>Default</cc-button>
    <cc-button type="primary">Primary</cc-button>
    <cc-button type="success">Success</cc-button>
    <cc-button type="info">Info</cc-button>
    <cc-button type="warning">Warning</cc-button>
    <cc-button type="danger">Danger</cc-button>
  </cc-row>

  <cc-row class="mb-4">
    <cc-button round>Default</cc-button>
    <cc-button type="primary" round>Primary</cc-button>
    <cc-button type="success" round>Success</cc-button>
    <cc-button type="info" round>Info</cc-button>
    <cc-button type="warning" round>Warning</cc-button>
    <cc-button type="danger" round>Danger</cc-button>
  </cc-row>

  <cc-row>
    <cc-button icon="star" circle />
    <cc-button type="primary" icon="search" circle />
    <cc-button type="success" icon="key" circle />
    <cc-button type="info" icon="reload" circle />
    <cc-button type="warning" icon="plus" circle />
    <cc-button type="danger" icon="delete" circle />
  </cc-row>
</template>
```

:::

### 禁用状态

使用 `disabled` 属性定义按钮是否被禁用。

:::demo 使用 `disabled` 属性来定义按钮是否为禁用状态，接受一个 `Boolean` 类型的值。

```vue
<template>
  <cc-row>
    <cc-button disabled>Default</cc-button>
    <cc-button type="primary" disabled>Primary</cc-button>
    <cc-button type="success" disabled>Success</cc-button>
    <cc-button type="info" disabled>Info</cc-button>
    <cc-button type="warning" disabled>Warning</cc-button>
    <cc-button type="danger" disabled>Danger</cc-button>
  </cc-row>
</template>
```

:::

### 图标按钮

使用图标来展示按钮的含义，代替文字节省显示区域。

使用 `icon` 属性来为按钮添加图标。您可以在 `Icon` 组建中找到所需图标。

:::demo

```vue
<template>
  <cc-row>
    <cc-button type="primary" icon="edit" />
    <cc-button type="primary" icon="delete" />
    <cc-button type="primary" icon="close" />
    <cc-button type="primary" icon="search">Search</cc-button>
    <cc-button type="primary">Upload<cc-icon name="upload" /></cc-button>
  </cc-row>
</template>
```

:::

### 按钮组

以组的方式出现，常用于多项操作。

使用 `<cc-button-group>` 分组。

:::demo

```vue
<template>
  <cc-button-group>
    <cc-button type="primary" icon="arrowleft">Previous Page</cc-button>
    <cc-button type="primary">Next Page<cc-icon name="arrowright" /></cc-button>
  </cc-button-group>

  <cc-button-group class="ml-4">
    <cc-button type="primary" icon="edit" />
    <cc-button type="primary" icon="delete" />
    <cc-button type="primary" icon="search" />
  </cc-button-group>
</template>
```

:::

### 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

:::demo

```vue
<template>
  <cc-row class="mb-4">
    <cc-button size="large">Large</cc-button>
    <cc-button>Default</cc-button>
    <cc-button size="small">Large</cc-button>
    <cc-button size="large" icon="search">Large</cc-button>
    <cc-button icon="search">Default</cc-button>
    <cc-button size="small" icon="search">Large</cc-button>
  </cc-row>

  <cc-row class="mb-4">
    <cc-button size="large" round>Large</cc-button>
    <cc-button round>Default</cc-button>
    <cc-button size="small" round>Large</cc-button>
    <cc-button size="large" round icon="search">Large</cc-button>
    <cc-button round icon="search">Default</cc-button>
    <cc-button size="small" round icon="search">Large</cc-button>
  </cc-row>

  <cc-row>
    <cc-button size="large" circle icon="search" />
    <cc-button circle icon="search" />
    <cc-button size="small" circle icon="search" />
  </cc-row>
</template>
```

:::
