import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CcButton: typeof import('../packages/cc-ui')['CcButton']
  }
}

export {}
