import { defineClientConfig } from '@vuepress/client'
import ccui from 'mouse-cc-ui'
import '@cc-ui/theme-chalk/src/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ccui)
  },
  setup() {},
  rootComponents: [],
})
