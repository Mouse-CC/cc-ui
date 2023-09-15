import Title from './src/index.vue'
import type { App } from 'vue'

Title.install = (app: App): void => {
  app.component(Title.name, Title)
}

export const CcTitle = Title
export default Title
