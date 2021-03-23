module.exports = [
  {text: '首页', link: '/'},
  {text: '关于', link: '/about/'},
  {text: '技术', items: [
    {text: '前端', link: encodeURI('/前端/')},
    {text: '服务端', link: encodeURI('/服务端/')},
    {text: '其它', link: encodeURI('/other/')}
  ]},
  // {text: '生活杂记', link: '/about/'},
]