export default {
  // '/api/': getAPISidebar(),
  '/components': getComponentsSidebar(),
  '/guide': getGuideSidebar(),
}

// function getAPISidebar() {
//     return [{ text: 'API参考', link: '/api/index.md' }]
// }

function getComponentsSidebar() {
  return [
    {
      isGroup: true,
      text: '组件',
      children: [
        {
          text: 'Button',
          link: '/components/button.md',
        },
        {
          text: 'Icon',
          link: '/components/icon.md',
        },
        {
          text: 'Layout',
          link: '/components/layout.md',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      isGroup: true,
      text: '指南',
      children: [{ text: '介绍', link: '/guide/intro.md' }],
    },
    {
      isGroup: true,
      text: '教程',
      children: [{ text: '按钮', link: '/components/button.md' }],
    },
  ]
}
