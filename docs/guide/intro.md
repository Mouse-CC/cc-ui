---
title: 安装
---

## cc-ui 简介

cc-ui 是基于 Vue3 + ElementPlus 二次开发的组合组件库集合，目前包含了 button、icon、checkbox、layout、input 等组件，后续还在补充中，敬请期待...
本组件库支持按需引入

## 用法

### 安装

```
npm install mouse-cc-ui
```

### 手动按需引入

```
<template>
  <cc-button type="primary" icon="edit" @click="handleClick" />
</template>

<script lang="ts" setup>
import { CcButton } from 'mouse-cc-ui'

onst btnClick = (e: MouseEvent) => {
  // event
}

</script>
```
