import { computed, defineComponent, h, provide } from 'vue'
import { useNamespace } from '@cc-ui/hooks'

export default defineComponent({
  name: 'CcRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
    },
  },
  setup(props, { expose, slots }) {
    provide('CcRow', props.gutter) // 为子组件提供
    const ns = useNamespace('row')
    const cl = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== 'start'),
      ns.is(`align-${props.align}`, !!props.align),
    ])

    const st = computed(() => {
      if (props.gutter) {
        return {
          marginLeft: `${-(props.gutter / 2)}px`,
          marginRight: `${-(props.gutter / 2)}px`,
        }
      } else {
        return ''
      }
    })

    return () =>
      h(props.tag, { class: cl.value, style: st.value }, slots.default?.()) // 暴露默认插槽
  },
})
