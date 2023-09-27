import path from 'path'
import { defaultTheme } from 'vuepress'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname } from '@vuepress/utils'
import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

const __dirname = getDirname(import.meta.url)

export default {
  lang: 'zh-CN',
  title: 'cc-ui',
  descroption: '基于 Vue3 + Element 的 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/vue.ico' }]],
  base: '/cc-ui/',
  port: 3000,
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  theme: defaultTheme({
    repo: 'Mouse-CC/cc-ui',
    logo: '/vue_logo.svg',

    navbar,

    sidebar,

    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    demoblockPlugin({
      // theme: 'github-light',
      cssPreprocessor: 'scss',
      scriptImports: ["import * as CcUi from 'mouse-cc-ui'"],
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue',
        },
        {
          searchValue: /import ({.*}) from 'mouse-cc-ui'/g,
          replaceValue: (s, s1) => `const ${s1} = CcUi`,
        },
      ],
    }),
  ],
}
