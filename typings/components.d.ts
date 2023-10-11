import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CcButton: typeof import('../packages/cc-ui')['CcButton']
    CcButtonGroup: typeof import('../packages/cc-ui')['CcButtonGroup']
    CcCheckbox: typeof import('../packages/cc-ui')['CcCheckbox']
    CcCheckboxGroup: typeof import('../packages/cc-ui')['CcButtonGroup']
    CcCol: typeof import('../packages/cc-ui')['CcCol']
    CcIcon: typeof import('../packages/cc-ui')['CcIcon']
    CcInput: typeof import('../packages/cc-ui')['CcInput']
    CcRow: typeof import('../packages/cc-ui')['CcRow']
    CcTransfer: typeof import('../packages/cc-ui')['CcTransfer']
  }

  interface CompoentCustomProperties {
    $message: typeof import('../packages/cc-ui')['CcMessage']
  }
}

export {}
