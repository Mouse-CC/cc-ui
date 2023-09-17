import { computed, defineComponent, h, inject } from 'vue'
import { useNamespace } from '@cc-ui/hooks'
import type { ExtractPropTypes } from 'vue'

const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
} as const

type ColProps = ExtractPropTypes<typeof colProps>

export default defineComponent({
  name: 'CcCol',
  props: colProps,
  setup(props, { expose, slots }) {
    const gutter = inject('CcRow', 0)
    const ns = useNamespace('col')
    const cl = computed(() => {
      const r = []
      ;['span', 'offset'].forEach((item: string) => {
        props[item as keyof ColProps]
          ? r.push(
              `cc-col-${item === 'offset' ? 'offset-' : ''}${
                props[item as keyof ColProps]
              }`
            )
          : ''
      })
      if (gutter) {
        r.push(ns.is('guttered'))
      }
      return [ns.b(), ...r]
    })

    const st = computed(() => {
      if (gutter) {
        return {
          paddingLeft: `${gutter / 2}px`,
          paddingRight: `${gutter / 2}px`,
        }
      } else {
        return ''
      }
    })

    return () =>
      h(props.tag, { class: cl.value, style: st.value }, slots.default?.())
  },
})
