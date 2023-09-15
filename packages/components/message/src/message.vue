<template>
  <transition
    :name="ns.b('fade')"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="visible"
      :id="id"
      :class="[
        ns.b(),
        { [ns.m(type)]: type },
        ns.is('center', center),
        customClass,
      ]"
      :style="customStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" :class="ns.e('content')">
          {{ message }}
        </p>
        <p v-else :class="ns.e('content')" v-html="message" />
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { defaultInitialZIndex, useNamespace, useZIndex } from '@cc-ui/hooks'
import { messageEmits, messageProp } from './message'
import { getLastOffset, getOffsetOrSpace } from './instance'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'CcMessage',
})

const props = defineProps(messageProp)
defineEmits(messageEmits)

const ns = useNamespace('message')
const visible = ref(false)
const height = ref(0)

const { currentZIndex, nextZIndex } = useZIndex(
  computed(() => props.zIndex || defaultInitialZIndex)
)

let stopTimer: (() => void) | undefined = undefined

const lastOffset = computed(() => getLastOffset(props.id))

const offset = computed(
  () => getOffsetOrSpace(props.id, props.offset) + lastOffset.value
)

const bottom = computed((): number => height.value + offset.value)

const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
  zIndex: currentZIndex.value,
}))

function startTimer() {
  if (props.duration === 0) return
  ;({ stop: stopTimer } = useTimeoutFn(() => {
    visible.value = false
  }, props.duration))
}

function clearTimer() {
  stopTimer?.()
}

onMounted(() => {
  startTimer()
  nextZIndex()
  visible.value = true
})

defineExpose({
  visible,
  bottom,
})
</script>
