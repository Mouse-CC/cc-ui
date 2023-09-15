import { defaultTheme } from 'vuepress'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default {
  lang: 'zh-CN',
  title: '组件库',
  descroption: '基于 Vue3 的 UI 组件库',
  theme: defaultTheme({
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
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue',
        },
      ],
    }),
  ],
}