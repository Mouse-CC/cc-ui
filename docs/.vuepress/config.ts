import { defaultTheme } from 'vuepress'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default {
  lang: 'zh-CN',
  title: 'cc-ui',
  descroption: '基于 Vue3 + Element 的 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]],
  base: '/cc-ui/',
  port: 3000,
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
    demoblockPlugin({
      customClass: 'demoblock-custom',
      theme: 'github-light',
      cssPreprocessor: 'scss',
      customStyleTagName: 'style lang="scss"',
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
