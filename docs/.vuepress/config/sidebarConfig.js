const fs = require('fs')
const path = require('path')

/**
 * @param filePath 需要遍历的文件路径
 */
function getSidebarList(filePath){
    const sidebarList = []
    const fullFilePath = path.resolve(__dirname, `../../${filePath}`)
    const files = fs.readdirSync(fullFilePath)
    files.forEach((file) => {
        if (!file.includes('.md')) return
        const fileName = file.replace('.md', '')
        sidebarList.push([encodeURI(filePath + fileName), fileName])
    })
    return sidebarList
}

module.exports = {
    '/technology/front_end/': [
        {
            title: '浏览器',        // 必要
            // path: '/',          // 可选, 标题的跳转链接，应为绝对路径，与 collapsable: true 互斥
            collapsable: true,     // 可选, 是否可折叠
            sidebarDepth: 1,       // 可选的, 展示标题深度
            children: getSidebarList('/technology/front_end/browser/')
        },
        {
            title: 'ECMAScript',
            collapsable: true,
            sidebarDepth: 1,
            children: getSidebarList('/technology/front_end/ecma_script/')
        },
    ]
}