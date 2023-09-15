<template>
  <div :class="ns.b('panel')">
    <p :class="ns.be('panel', 'header')">
      <cc-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </cc-checkbox>
    </p>

    <div :class="[ns.be('panel', 'body'), ns.is('width-footer', hasFooter)]">
      <cc-checkbox-group
        v-show="!hasNoMatch && !isEmpty(data)"
        v-model="checked"
        :class="ns.be('panel', 'list')"
      >
        <cc-checkbox
          v-for="item in filteredData"
          :key="item[propsAlias.key]"
          :class="ns.be('panel', 'item')"
          :label="item[propsAlias.key]"
          :disabled="item[propsAlias.disabled]"
        >
          <option-content :option="optionRender?.(item)" />
        </cc-checkbox>
      </cc-checkbox-group>
      <p v-show="hasNoMatch || isEmpty(data)" :class="ns.be('panel', 'empty')">
        {{ hasNoMatch ? 'no Match' : 'no Data' }}
      </p>
    </div>

    <p v-if="hasFooter" :class="ns.be('panel', 'footer')">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, toRefs, useSlots } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import { CcCheckbox } from '@cc-ui/components/checkbox'
import { CcCheckboxGroup } from '@cc-ui/components/checkbox-group'
import { isEmpty } from '@cc-ui/utils'
import { transferPanelEmits, transferPanelProps } from './transfer-panel'
import { useCheck, usePropsAlias } from './composables'

import type { VNode } from 'vue'
import type { TransferPanelState } from './transfer-panel'

defineOptions({
  name: 'CcTransferPanel',
})

const props = defineProps(transferPanelProps)
const emit = defineEmits(transferPanelEmits)
const slots = useSlots()

const OptionContent = ({ option }: { option: VNode | VNode[] | undefined }) =>
  option

const ns = useNamespace('transfer')

const panelState = reactive<TransferPanelState>({
  checked: [],
  allChecked: false,
  query: '',
  checkChangeByUser: true,
})

const propsAlias = usePropsAlias(props)

const {
  filteredData,
  checkedSummary,
  isIndeterminate,
  handleAllCheckedChange,
} = useCheck(props, panelState, emit)

const hasNoMatch = computed(
  () => !isEmpty(panelState.query) && isEmpty(filteredData.value)
)

const hasFooter = computed(() => !isEmpty(slots.default!()[0].children))

const { checked, allChecked, query } = toRefs(panelState)

defineExpose({
  query,
})
</script>
