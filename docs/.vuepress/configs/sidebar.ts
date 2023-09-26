export default {
  '/components': getComponentsSidebar(),
  '/guide': getGuideSidebar(),
}

function getComponentsSidebar() {
  return [
    {
      isGroup: true,
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button.md',
        },
        {
          text: 'Icon 图标',
          link: '/components/icon.md',
        },
        {
          text: 'Layout 布局',
          link: '/components/layout.md',
        },
        {
          text: 'Checkout 多选框',
          link: '/components/checkbox.md',
        },
        {
          text: 'Input 输入框',
          link: '/components/input.md',
        },
        {
          text: 'Transfer 穿梭框',
          link: '/components/transfer.md',
        },
        {
          text: 'Message 消息提示',
          link: '/components/message.md',
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
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button.md',
        },
        {
          text: 'Icon 图标',
          link: '/components/icon.md',
        },
        {
          text: 'Layout 布局',
          link: '/components/layout.md',
        },
        {
          text: 'Checkbox 多选框',
          link: '/components/checkbox.md',
        },
        {
          text: 'Input 输入框',
          link: '/components/input.md',
        },
        {
          text: 'Transfer 穿梭框',
          link: '/components/transfer.md',
        },
        {
          text: 'Message 消息提示',
          link: '/components/message.md',
        },
      ],
    },
  ]
}
