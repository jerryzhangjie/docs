## 解决git clone慢

众所周知的缘故，大局域网中的众生，无法访问外网或速度慢，例如从github clone项目代码时，速度很慢。
解决方法：利用国内的git网站(码云、Coding等)作为转接，实现从码云clone后，push到github的效果。

步骤：
* 注册码云或Coding，从github导入需clone的项目。以码云为例

![](https://gitee.com/jerry-zhang/image-database/raw/master/img/kno5jRvgd1s7XwF.png)

* 从码云clone项目（会发现快很多）

`git clone <码云项目地址>`

* 将远程仓库地址设置回github中的项目地址

`git remote set-url origin <github项目地址>`

* 码云作用结束，正常向github提交代码