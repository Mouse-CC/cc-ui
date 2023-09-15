import CheckboxGroup from '../checkbox/src/checkbox-group.vue'
import type { App } from 'vue'

CheckboxGroup.install = (app: App) => {
  app.component(CheckboxGroup.name, CheckboxGroup)
}

export const CcCheckboxGroup = CheckboxGroup
export default CheckboxGroup
