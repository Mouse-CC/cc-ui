<template>
  <div :class="ns.b()">
    <transfer-panel
      ref="leftPanel"
      :data="sourceData"
      :option-render="optionRender"
      :placeholder="panelFilterPlaceholder"
      :title="leftPanelTitle"
      :format="format"
      :filter-method="filterMethod"
      :default-checked="leftDefaultChecked"
      :props="props.props"
      @checked-change="onSourceCheckedChange"
    >
      <slot name="left-footer" />
    </transfer-panel>
    <div :class="ns.e('buttons')">
      <cc-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
        :disabled="isEmpty(checkedState.rightChecked)"
        @click="addToLeft"
      >
        <cc-icon name="arrowleft" />
        <span v-if="!isUndefined(buttonTexts[0])">{{ buttonTexts[0] }}</span>
      </cc-button>
      <cc-button
        type="primary"
        :class="[ns.e('button'), ns.is('with-texts', hasButtonTexts)]"
        :disabled="isEmpty(checkedState.leftChecked)"
        @click="addToRight"
      >
        <cc-icon name="arrowright" />
        <span v-if="!isUndefined(buttonTexts[1])">{{ buttonTexts[1] }}</span>
      </cc-button>
    </div>
    <transfer-panel
      ref="rightPanel"
      :data="targetData"
      :option-render="optionRender"
      :placeholder="panelFilterPlaceholder"
      :format="format"
      :filter-method="filterMethod"
      :title="rightPanelTitle"
      :default-checked="rightDefaultChecked"
      :props="props.props"
      @checked-change="onTargetCheckedChange"
    >
      <slot name="right-footer" />
    </transfer-panel>
  </div>
</template>

<script setup lang="ts">
import { computed, h, reactive, ref, useSlots, watch } from 'vue'
import { isEmpty, isUndefined } from '@cc-ui/utils'
import { useNamespace } from '@cc-ui/hooks'
import { CcButton } from '@cc-ui/components/button'
import { CcIcon } from '@cc-ui/components/icon'
import { UPDATE_MODEL_EVENT } from '@cc-ui/constants'
import { transferEmits, transferProps } from './transfer'
import {
  useCheckedChange,
  useComputedData,
  useMove,
  usePropsAlias,
} from './composables'
import TransferPanel from './transfer-panel.vue'

import type {
  TransferCheckedState,
  TransferDataItem,
  TransferDirection,
} from './transfer'
import type { TransferPanelInstance } from './transfer-panel'

defineOptions({
  name: 'CcTransfer',
})

const props = defineProps(transferProps)
const emit = defineEmits(transferEmits)
const slots = useSlots()

const ns = useNamespace('transfer')
const checkedState = reactive<TransferCheckedState>({
  leftChecked: [],
  rightChecked: [],
})

const propsAlias = usePropsAlias(props)

const { sourceData, targetData } = useComputedData(props)

const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange(
  checkedState,
  emit
)

const { addToLeft, addToRight } = useMove(props, checkedState, emit)

const leftPanel = ref<TransferPanelInstance>()
const rightPanel = ref<TransferPanelInstance>()

const clearQuery = (which: TransferDirection) => {
  switch (which) {
    case 'left':
      leftPanel.value!.query = ''
      break
    case 'right':
      rightPanel.value!.query = ''
      break
  }
}

const hasButtonTexts = computed(() => props.buttonTexts.length === 2)

const leftPanelTitle = computed(() => props.titles[0] || 'source')

const rightPanelTitle = computed(() => props.titles[1] || 'target')

const panelFilterPlaceholder = computed(
  () => props.filterPlaceholder || 'placeholder'
)

watch(
  () => props.modelValue,
  (val) => {
    emit(UPDATE_MODEL_EVENT, val)
  }
)

const optionRender = computed(() => (option: TransferDataItem) => {
  if (props.renderContent) return props.renderContent(h, option)

  if (slots.default) return slots.default({ option })

  return h(
    'span',
    option[propsAlias.value.label] || option[propsAlias.value.key]
  )
})

defineExpose({
  leftPanel,
  rightPanel,
  clearQuery,
})
</script>
