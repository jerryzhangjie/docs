Markdown语法自查手册
=

# What
Markdown（以下简称MD）是一种轻量级**标记语言**，它以纯文本形式（易读、易写、易更改）编写文档，并最终以HTLM格式发布。也可以理解为，MD是将以MD语法编写的文本转换成HTML内容的工具。

MD文件后缀为 \.md

# Why
* 简洁明了，易读、易写、易维护；
* 兼容HTML，可以网页形式在浏览器中展示；
* 可转译为pdf、word等格式；
* 越来越广泛的使用。

# How
## 1. 标题
两种方式：

- 使用 `=` 表示`一级标题`，使用 `-` 表示`二级标题`。缺点是仅支持一二级标题；

    一级

    \=
    
    二级
    
    \-

    一级
    =
    二级
    -
- 使用 `#` 表示 `1-6级` 标题。`#`越多级数越低；

  \# 一级

  \## 二级

  \### 三级

  ...

  # 一级
  ## 二级
  ### 三级
  ...

## 2. 引用
符号为 `>`, 若需嵌套引用，可增加 `>` 数量，如 `>>`

\> 引用

\>> 嵌套引用

\>>> 三层嵌套

\...

> 引用

>> 嵌套引用

>>> 三层嵌套

...
  
## 3. 代码块
单行代码使用 **``**，多行代码块在每行开始位置加上四个空格。有时单行代码块也用于凸显强调文本。

\`let a = 0`

`let a = 0`

    let b = 1
    console.log(b)

## 4. 强调
斜体字在文字两侧加上 `*` 或 `_`

\*斜体*

*斜体*

粗体字在文字两侧加上 **\** 或 **\__**

\*\*粗体**

**粗体**

## 5. 列表
使用数字加点(.与文字间有空格)表示有序列表：

1. haha

2. hehe

使用`*` 、`+`、或`-` (与文字间有空格)标记无序列表，如：

\* 哈哈

\+ 呵呵

\- 嘿嘿


* 哈哈

+ 呵呵

- 嘿嘿

## 6. 分割线
三个或以上的 `***` 或 `---` 或 `___`

\***

***

## 7. 链接
行内式：
    
    [Github](https://github.com)

[Github](https://github.com)

参考式：

    [Github][1]

    [1]:https://github.com

[Github][1]

[1]:https://github.com

## 8. 锚点

设置锚点与链接类似：

    [显示内容](#标题名称)

    例如跳转至what：[what](#what)

[what](#what)

## 9. 图片
添加图片形式和链接相似，只需要在链接的基础上前方加一个 `!` 号。

    ![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf3989ad767c17719.jpeg)

![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf3989ad767c17719.jpeg)

    ![md.jpeg][2]

    [2]:https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf3989ad767c17719.jpeg

![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf3989ad767c17719.jpeg)

## 10. 反斜杠
相当于反转义作用。使符号成为普通符号。

\\##

\##

## 11. 表格
\|协议类型\|默认端口

\|--------\|--------

|http|80

|https|443

|ftp|21

|telnet|23

|协议类型|默认端口
|--------|--------
|http|80
|https|443
|ftp|21
|telnet|23

## 12. 其它
[MD流程图传送带](https://www.jianshu.com/p/b421cc723da5)

## 13. 扩展
上文提到`MD是将以MD语法编写的文本转换成HTML内容的工具`，其实MD也支持直接书写HTML标签，例如我们可以在MD文件的任意位置嵌入图片：

`<img src="https://i.loli.net/2019/06/07/5cf9ca3930eab48145.jpeg" style=" position: absolute; width: 200px; height: 150px; top: 50px; right: 27px;">`

(通过position定位，可以使html内容不必遵循MD自上而下的排版方式)

# Tool
`VSCode + Markdown Preview Github Styling` 目前在用

`有道云笔记`

`MAC端的MARKDOWN`