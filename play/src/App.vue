<template>
  <span style="color: #00a0ff">play</span>
  <div>
    <div class="btn-group">
      <cc-button size="large" @click="btnClick" icon="'like'">B</cc-button>
      <cc-button type="primary" circle icon="home"></cc-button>
    </div>
    <cc-title>{{ 'title' }}</cc-title>
    <cc-icon name="bulb" class="icon-style" />
    <cc-button-group>
      <cc-button
        size="large"
        type="primary"
        icon="like"
        circle
        @click="btnClick"
      />
      <cc-button size="large" type="primary" icon="home" circle />
      <cc-button size="large" type="primary" icon="unlike" circle />
    </cc-button-group>

    <div class="padding-1">
      <cc-row>
        <!-- :gutter="20" -->
        <cc-col :span="6" :offset="6">
          <div class="rgba-up-5">b</div>
        </cc-col>
        <cc-col :span="12">
          <div class="rgba-up-8">e</div>
        </cc-col>
      </cc-row>
    </div>

    <div class="padding-0">
      <cc-row justify="end">
        <cc-col tag="span" :span="2">b</cc-col>
        <cc-col tag="span" :span="2" :offset="9">e</cc-col>
        <cc-col tag="span" :span="2" :offset="9">m</cc-col>
      </cc-row>
    </div>

    <div class="w-240">
      <cc-input v-model="state" placeholder="stardust" disabled />
    </div>

    <div>
      <cc-checkbox
        v-model="cbx"
        label="option 1"
        size="large"
        disabled
        border
        @change="handleChange"
      />
    </div>

    <div>
      <span>{{ cbxs }}</span>
      <cc-checkbox-group
        v-model="cbxs"
        size="large"
        @change="handleGroupChange"
      >
        <cc-checkbox label="option 5"></cc-checkbox>
        <cc-checkbox label="option 6"></cc-checkbox>
      </cc-checkbox-group>
    </div>

    <div>
      <cc-transfer v-model="value" :data="data"></cc-transfer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { CcMessage, CcButton } from 'cc-ui'

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

const state = ref('Stardust')
const cbx = ref(false)
const cbxs = ref(['option 5', 'option 6'])

const btnClick = (e: MouseEvent) => {
  CcMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
  console.log(e)
}

const handleChange = (val: boolean) => {
  console.log(val)
}

const handleGroupChange = (val: (string | number)[]) => {
  console.log(val)
}

watch(
  () => state.value,
  (newVal) => {
    console.log('input: ', newVal)
  }
)
</script>

<style lang="scss">
.icon-style {
  color: green;
  font-size: 18px;
}
.padding-1 {
  padding: 1.5rem;
  background: wheat;
}
.padding-0 {
  padding: 0;
  background: #cccccc;
}
.rgba-up-5 {
  background: rgba($color: #00a0ff, $alpha: 0.5);
}
.rgba-up-8 {
  background: rgba($color: #00a0ff, $alpha: 0.8);
}
.w-240 {
  width: 240px;
}
</style>
