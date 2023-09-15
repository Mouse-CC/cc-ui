import Icon from './src/index.vue'
import type { App } from 'vue'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

export const CcIcon = Icon
export default Icon
