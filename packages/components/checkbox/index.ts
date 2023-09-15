import Checkbox from './src/checkbox.vue'
import type { App } from 'vue'

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox)
}

export const CcCheckbox = Checkbox
export default Checkbox
