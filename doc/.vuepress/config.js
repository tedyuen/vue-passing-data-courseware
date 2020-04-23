module.exports = {
  title: 'Vue2.x 组件通讯',
  description: 'Vue2.x组件通讯课件文档',
  base: '/',
  themeConfig: {
    nav: [ // 添加导航栏
      {
        text: '课程介绍',
        link: '/'
      }
    ],
    sidebar: {
      '/': [
        {
          title: '常用组件通讯的方式',
          path: '/INFO.md'
        },
        {
          title: '方式解读',
          collapsable: false,
          children: [
            {
              title: 'Prop',
              path: '/PROPS.md'
            },
            {
              title: 'v-on + $emit',
              path: '/EMIT.md'
            },
            {
              title: 'EventHub',
              path: '/EVENTHUB.md'
            },
            {
              title: '$attrs & $listeners',
              path: '/ATTR_LISTENERS.md'
            },
            {
              title: '`provide` + `inject`',
              path: '/PROVIDE_INJECT.md'
            }
          ]
        },
      ]
    },
    sidebarDepth: 2
  },
  markdown: {
    lineNumber: true
  },
}