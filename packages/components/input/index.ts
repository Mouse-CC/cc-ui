import Input from './src/input.vue'
import type { App } from 'vue'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

export const CcInput = Input
export default Input
