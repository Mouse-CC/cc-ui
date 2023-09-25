import components from './component'
import plugin from './plugin'
import type { App } from 'vue'
import '@cc-ui/theme-chalk/src/index.scss'

const install = (app: App) => {
  components.forEach((c) => {
    app.component(c.name, c)
  })
  plugin.forEach((f) => {
    app.use(f)
  })
}

export {
  CcButton,
  CcButtonGroup,
  CcTitle,
  CcIcon,
  CcCol,
  CcRow,
  CcInput,
  CcCheckboxGroup,
  CcCheckbox,
  CcTransfer,
  CcMessage,
} from '@cc-ui/components'
export * from '@cc-ui/constants'
export * from '@cc-ui/hooks'

export default install
