import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import type { CheckboxGroupProps } from './checkbox-group'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<Pick<CheckboxGroupProps, 'size' | 'disabled'>> // pick 选择指定的 key 返回 type， ToRefs 返回类型 且  类型为响应式 size: Ref<CheckboxSize>, disabled: Reg<boolean>, 联合 活动事件和model

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey') // InjectionKey 断言为 Symbol，用于同步 provide（） 与 inject（） 之间的类型
