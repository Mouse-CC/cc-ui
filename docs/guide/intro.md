---
title: 安装
---

## mcl-ui 简介

mcl-ui 是基于 Vue3 + ElementPlus 二次开发的组合组件库集合，目前包含了 table 表格组件等，后续还在补充中，敬请期待...
本组件库支持按需引入，也支持使用分包安装的形式引入

## 用法

### 安装

```
yarn add mcl-ui
```

### 手动按需引入

```
<template>
  <base-table :tableData="tableData" :columns="columns"></base-table>
</template>

<script lang="ts" setup>
import {BaseTable} from 'mcl-ui'
const columns = [
  {
    label: '编号',
    type: 'index',
    width: '80px'
  },
  {
    label: '姓名',
    value: 'name',
    minWidth: '120px'
  },
  {
    label: '年龄',
    value: 'age',
    minWidth: '120px'
  }
]
const tableData = [
  {
    name: '张三',
    age: '20',
  }
]
</script>
```

### 安装分包

使用哪个组件安装哪个组件,比如安装`table`组件：

```
yarn add @mcl-ui/table
```

在项目中使用：

```
<template>
  <base-table :tableData="tableData" :columns="columns"></base-table>
</template>

<script lang="ts" setup>
import BaseTable from '@mcl-ui/table'

const columns = [
  {
    label: '编号',
    type: 'index',
    width: '80px'
  },
  {
    label: '姓名',
    value: 'name',
    minWidth: '120px'
  },
  {
    label: '年龄',
    value: 'age',
    minWidth: '120px'
  }
]
const tableData = [
  {
    name: '张三',
    age: '20',
  }
]
</script>
```
