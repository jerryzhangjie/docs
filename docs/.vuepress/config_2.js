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
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '关于', link: '/about/' },
    //   // {
    //   //   text: '语言',
    //   //   items: [
    //   //     { text: '中文', link: '/lan/chinese' },
    //   //     { text: '英文', link: '/lan/english' }
    //   //   ]
    //   // },
    //   {
    //     text: '分组',
    //     items: [
    //       { text: '分组1', 
    //         items: [
    //           { text: '中文', link: '/lan/chinese' },
    //           { text: '英文', link: '/lan/english' }
    //         ] 
    //       },
    //       { text: '分组2', 
    //         items: [
    //           { text: '中文', link: '/lan/chinese' },
    //           { text: '英文', link: '/lan/english' }
    //         ] 
    //       }
    //     ]
    //   },
    //   { 
    //     text: 'Github', 
    //     link: 'https://github.com/jerryzhangjie', 
    //     target: '_blank', 
    //     rel: 'noopener norefferrer' 
    //   }
    // ],
    // 侧边栏
    // sidebar: [
    //   ['/', '首页'],
    //   // '/page-a',
    //   ['/about/', '关于'],
    //   ['/about/A', 'A']
    // ],
    // sidebar: [
    //   // 侧边栏分组
    //   {
    //     title: 'Group 1',   // 必要的
    //     // path: '/',          // 可选的, 标题的跳转链接，应为绝对路径，与 collapsable: true 互斥
    //     collapsable: true,  // 可选的, 是否可折叠
    //     sidebarDepth: 1,    // 可选的, 展示标题深度
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [
    //       ['/', '首页'],
    //       ['/about/', '关于'],
    //     ]
    //   }
    // ],
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
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'jerryzhangjie/my-docs',
    // // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！'
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@img': 'path/to/some/dir'
      }
    }
  }
}