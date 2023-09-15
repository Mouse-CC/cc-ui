import ButtonGroup from '../button/src/button-group.vue'
import type { App } from 'vue'

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export const CcButtonGroup = ButtonGroup
export default ButtonGroup
