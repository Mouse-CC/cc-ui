import { computed, inject, unref } from 'vue'
import { buildProp } from '@cc-ui/utils'
import { componentSizes } from '@cc-ui/constants'

import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@cc-ui/constants'

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const)

export const useSizeProps = {
  size: useSizeProp,
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')

export const useGlobalSize = () => {
  const injectSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectSize.size) || ''
  })
}
