import { defineClientConfig } from '@vuepress/client'
import ccui from 'mouse-cc-ui'
import '@cc-ui/theme-chalk/src/index.scss'
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app, router }) {
    app.use(ccui)
  },
  setup() {},
  rootComponents: [],
})
