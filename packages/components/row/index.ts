import Row from './src/row'
import type { App } from 'vue'

Row.install = (app: App): void => {
  app.component(Row.name, Row)
}

export const CcRow = Row
export default Row
