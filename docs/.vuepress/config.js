const navConfig = require('./config/navConfig')

module.exports = {
  title: '能量蓄水池',
  description: '学习笔记、知识文档、经验总结、生活杂记。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  // 主题配置
  themeConfig: {
    // logo
    logo: '/favicon.svg',
    // 导航栏
    nav: navConfig,
    // 各自路由的侧边栏
    sidebar: {
      '/lan/': [
        'chinese',  /* /foo/one.html */
        'english'   /* /foo/two.html */
      ],

      '/about/': [
        '',      /* /bar/ */
      ],

      // fallback
      '/': [
        '',        /* / */
      ]
    },
    displayAllHeaders: false,   // 是否默认展开所有侧边栏
    activeHeaderLinks: true, // 是否开启滚动时自动定位侧边栏
    lastUpdated: '最后更新时间', // 是否展示最后更新时间
    smoothScroll: true,         // 开启页面滚动效果


    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'jerryzhangjie/my-docs',
    repoLabel: '查看源码',
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@img': 'path/to/some/dir'
      }
    }
  }
}