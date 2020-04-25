module.exports = {
  title: '组件通讯',
  description: 'Vue2.x组件通讯课堂笔记',
  base: '/',
  themeConfig: {
    nav: [ // 添加导航栏
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: {
      '/': [
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
              title: 'provide + inject',
              path: '/PROVIDE_INJECT.md'
            },
            {
              title: 'parent & children & refs',
              path: '/PARENT_CHILDREN.md'
            }
          ]
        },
        {
          title: '组件通讯知识点归纳',
          path: '/INFO.md'
        }
      ]
    },
    sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true
  }
}