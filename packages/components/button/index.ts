import Button from './src/button.vue'
import type { App } from 'vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export const CcButton = Button
export default Button
