import { defineClientConfig } from '@vuepress/client'
import CcButton from '../../packages/components/button'
import CcButtonGroup from '../../packages/components/button-group'
import CcIcon from '../../packages/components/icon'
import CcRow from '../../packages/components/row'
import CcCol from '../../packages/components/col'
import CcCheckbox from '../../packages/components/checkbox'
import CcCheckboxGroup from '../../packages/components/checkbox-group'
import CcInput from '../../packages/components/input'
import CcTransfer from '../../packages/components/transfer'
import CcMessage from '../../packages/components/message'
import '@cc-ui/theme-chalk/src/index.scss'
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CcButton', CcButton)
    app.component('CcButtonGroup', CcButtonGroup)
    app.component('CcIcon', CcIcon)
    app.component('CcRow', CcRow)
    app.component('CcCol', CcCol)
    app.component('CcCheckbox', CcCheckbox)
    app.component('CcCheckboxGroup', CcCheckboxGroup)
    app.component('CcInput', CcInput)
    app.component('CcTransfer', CcTransfer)
    app.use(CcMessage)
  },
  setup() {},
  rootComponents: [],
})
