import Col from './src/col'
import type { App } from 'vue'

Col.install = (app: App): void => {
  app.component(Col.name, Col)
}

export const CcCol = Col
export default Col
