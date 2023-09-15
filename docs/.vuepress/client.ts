import { defineClientConfig } from '@vuepress/client'
import CcTitle from '../../packages/components/title'
import CcButton from '../../packages/components/button'
import CcButtonGroup from '../../packages/components/button-group'
import CcIcon from '../../packages/components/icon'
import CcRow from '../../packages/components/row'
import '@cc-ui/theme-chalk/src/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CcTitle', CcTitle)
    app.component('CcButton', CcButton)
    app.component('CcButtonGroup', CcButtonGroup)
    app.component('CcIcon', CcIcon)
    app.component('CcRow', CcRow)
  },
})
