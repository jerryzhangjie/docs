const fs = require('fs')
const path = require('path')
const sidebarConfig = {}

/**
 * 获得目标文件夹绝对路径
 * @param dirPath 目标文件夹相对路径
 * @returns 
 */
function getFullDirPath(dirPath) {
    return path.resolve(__dirname, `../../${dirPath}`)
}



/**
 * 获得目标文件夹的所有元素
 * @param dirPath 目标文件夹相对路径
 */
function getAllDir(dirPath) {
    const fullDirPath = getFullDirPath(dirPath)
    let allDirs = fs.readdirSync(fullDirPath)
    allDirs = allDirs.filter((dir) => {
        return dir !== '.DS_Store' && dir !== 'README.md'
    }).sort((a, b) => {
        let l = parseFloat(a.split('.')[0])
        let r = parseFloat(b.split('.')[0])
        if (l < r) {
            return -1
        } else if (l > r) {
            return 1
        } else {
            const l_i = a.indexOf('.')
            const l_j = a.indexOf(' ')
            const r_i = b.indexOf('.')
            const r_j = b.indexOf(' ')
            l = parseFloat(a.substring(l_i + 1, l_j))
            r = parseFloat(b.substring(r_i + 1, r_j))
            if (l < r) {
                return -1
            } else {
                return 1
            }
        }
    })
    return allDirs
}

/**
 * @param dirPath 需要遍历的文件路径
 */
function getSidebarList(dirPath){
    const sidebarList = []
    const files = getAllDir(dirPath)
    files.forEach((file) => {
        if (!file.includes('.md')) return
        const fileName = file.replace('.md', '')
        sidebarList.push([`${dirPath}/${fileName}`, fileName])
    })
    return sidebarList
}

/**
 * 设置 sidebarConfig
 * @param dirPath 目标文件夹相对路径
 * @param type 1-侧边栏分组 2-不分组
 */
function setSidebarConfig(dirPath, type) {
    if (type === '1') {
        const allDirs = getAllDir(dirPath)
        allDirs.forEach((dir) => {
            const path = `${dirPath}/${dir}`
            sidebarConfig[path] = []
            let allSubDirs = getAllDir(path)
            allSubDirs.forEach((subDir) => {
                const subPath = `${path}/${subDir}`
                const sidebarList = getSidebarList(subPath, path)
                sidebarConfig[path].push(
                    {
                        title: subDir,        // 必要
                        // path: '/',          // 可选, 标题的跳转链接，应为绝对路径，与 collapsable: true 互斥
                        collapsable: true,     // 可选, 是否可折叠
                        sidebarDepth: 1,       // 可选的, 展示标题深度
                        children: sidebarList
                    }
                )
            })
        })
    }
}

setSidebarConfig('/technology', '1')

module.exports = sidebarConfig