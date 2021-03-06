# 彻底理解从输入URL到页面展现的过程
### 流程概述
地址栏输入url ——> 域名解析 ——> 服务器处理请求 ——> 浏览器处理响应

## 一、地址栏输入URL
### 1. 认识URL
**定义：** URL（Uniform Resource Locator）统一资源**定位符**，用于定位网络上的资源，实际上就是网站的网址。
> URI（Uniform Resource Identifier）统一资源**标识符**，是一类用于标示物理资源的字符串。URL是URI的一种子集，URL的不同在于，它除了确定一个资源，还提供了一种定位该资源的访问机制（如http://）。

**标准格式：**
三部分：协议类型、主机域名、存放路径及文件名
`scheme://[host.]domain[:port]/path/filename`
* **scheme** - 资源的因特网服务协议类型，常见的有http、https、ftp(文件传输协议)等；
* **host** - 域主机类型，省略时取默认值，http/https默认值为www；
* **domain** - 英特网域名，如w3school.com.cn；
* **:port** - 端口号，省略时取默认值，http默认为80，https默认为443；
* **path** - 资源存放路径，若省略则资源必须位于网站根目录中；
* **filename** - 资源文件名。

例如，我的github前端知识库项目主页为 https://github.com/Zhang-jerry/KBS ，其中，https表示与web服务器通讯采用https协议，省略了域主机host(www)，github的web服务器域名为 github.com，端口号取了默认值443，/Zhang-jerry指定了页面在服务器上的存放路径，/KBS指定了项目主页在服务器中的文件名称。

**端口的作用：** 一台主机常同时作为Web、FTP等服务器使用，端口编号用来告诉主机要将请求交给哪个服务器。默认情况下http服务的端口为80，不需要在url中输入，如果web服务器采用的不是这一个默认端口，就需要写明服务器所用的端口。常见的协议默认端口如下：
|协议类型|默认端口
|--------|--------
|http|80
|https|443
|ftp|21
|telnet|23
简单理解：一台主机可分成几个服务，主机通过域名区分，每个服务通过端口区分，url请求的是服务而非主机，所以需要端口号。

### 2. 认识IP地址
> 每个抛头露面的域名背后总有一个低调内敛的IP。

**IP：** 是因特网中每台计算机为实现相互通信而遵循的规则协议。每个处于互联网中的设备都有IP地址，每个网站就是靠服务器的IP地址来定位的。

**域名：** 可以理解成“为了方便记忆而为IP地址起的一个小名”，人们使用域名来登录网站，每个域名背后有对应的IP地址。

例如，github的URL为 https://github.com，其域名为 github.com，其实浏览器并不知道github.com是什么鬼，要访问该网站，就需要查找该域名所代表的IP地址（即github网站服务器的IP地址），这个查找的过程即为**域名解析**。

## 二、域名解析
域名解析是一个层级查找的过程：
查找浏览器缓存 ——> 查找操作系统缓存 ——> 查找路由器缓存 ——> 查找本地DNS缓存 ——> 递归查询
（DNS：域名和IP地址相互映射的一个分布式数据库）

**具体来说：**

 1. **浏览器缓存**

    浏览器查找缓存中是否之前解析过并缓存了这个域名的IP地址。
    如果有，浏览器获得该IP，解析过程结束，如果没有，继续查找操作系统缓存。

 2. **操作系统缓存**

    浏览器查找操作系统hosts文件中是否有目标域名和对应的IP地址。
    如果有，浏览器获得该IP，解析过程结束，如果没有，继续查找路由器缓存。

 3. **路由器缓存**

    路由器一般会有自己的DNS缓存，浏览器到路由器DNS缓存中查找。
    如果有，浏览器获得该IP，解析过程结束，如果没有，继续查找本地DNS缓存。

 4. **本地DNS缓存**

    网络配置中都会有"DNS服务器地址"这一项，浏览器会把这个域名发送给这里设置的DNS服务器，也就是本地区的域名服务器，通常是给你提供接入互联网的运营商。114.114.114.114是国内移动、电信和联通通用的DNS。
    如果有，浏览器获得该IP，解析过程结束，如果没有，继续进行递归查找。

 5. **递归查找**

    * 本地DNS服务器将目标域名转发到互联网上的根域
    * 根域将所要查询域名中的顶级域（比如www.baidu.com的顶级域就是com）的服务器IP地址返回给本地DNS。
    * 本地DNS根据返回的顶级域IP地址，向顶级域服务器发送目标域名，顶级域服务器再将域名中的二级域（比如www.baidu.com的二级域为baidu.com）的服务器IP地址返回给本地DNS。
    * 本地DNS根据返回的二级域IP地址，向二级域服务器发送目标域名，重复这样的过程，直到本地DNS获得完整的服务器IP地址，并返回给浏览器。

    下图展示了完整的递归查询过程：

    ![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf372c2c1c4415893.png)

获得完整的服务器IP地址后，域名解析环节完成。之后，将依次经历：三次握手建立连接 -> 浏览器向该IP服务器发送http请求报文 -> 服务器处理请求并发送http响应报文 -> 浏览器解析响应报文渲染页面 -> 四次挥手断开连接。

**性能优化点：**

开启 DNS 预解析：预先对页面中出现的域名进行解析得到相应ip地址，然后缓存下来，待实际使用该域名时，不再花费域名解析时间。

      // 用meta信息来告知浏览器, 当前页面要做DNS预解析
      <meta http-equiv="x-dns-prefetch-control" content="on">
      // 在页面header中使用link标签来强制对DNS预解析
      <link rel="dns-prefetch" href="//domain.com">


## 三、三次握手建立连接
浏览器发送请求数据之前，会先与该 IP 服务器进行 TCP 三次握手用以建立连接。
* 第一次握手，由浏览器发起，告诉服务器我要发送请求了；
* 第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧；
* 第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧。

![Screenshot0720-0939](https://gitee.com/jerry-zhang/image-database/raw/master/picgo/Screenshot0720-0939.jpg)

## 四、发送 Http 请求报文

## 五、服务器处理请求
服务器上安装了处理http请求的应用 —— web server，常见的web server产品有apache、nginx、IIS、Lighttpd等。

当web server接收到一个HTTP请求(request)，会结合配置文件，把不同请求委托给服务器上处理对应请求的程序进行处理（例如CGI脚本、JSP脚本、servlets、ASP脚本、服务器端JavaScript、或者一些其它的服务器端技术等）。不管是哪种脚本，这些服务器端(server-side)程序都会产生一个http响应(response)，例如送回一个HTML页面，来让浏览器可以展现。

完成处理过程的代码框架，大部分是按照MVC设计模式搭建的，实际处理过程如下图：

![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf374fb82fba19889.png)

MVC的处理过程是这样的：每个用户输入的请求，首先被控制器(C)接收，控制器决定用哪个模型(M)来处理，然后模型用业务逻辑来处理用户的请求，再然后控制器决定用哪个视图模型(V)来接收模型处理后的数据，最后由该视图模型对应的视图格式化模型来返回HTML字符串给浏览器。

## 六、浏览器处理响应
浏览器接收到http返回的字节数据后，会依次经历：字节流解码、输入流预处理、加载、解析、渲染。

* **字节流解码：** http 返回报文，都是字节数据。浏览器得到字节数据（0和1）后，会通过“[编码嗅探算法](https://html.spec.whatwg.org/multipage/parsing.html#encoding-sniffing-algorithm)”来获知字符编码方式(例如UTF-8)，然后通过该编码方式将字节数据解码为字符串数据（我们写的代码）。

   通过抓包工具截获的报文：

   ![CgqCHl7OM8-AJ2jzAABvLLJLW2s663](https://gitee.com/jerry-zhang/image-database/raw/master/picgo/CgqCHl7OM8-AJ2jzAABvLLJLW2s663.png)

* **输入流预处理：** 字节流解码得到的字符串数据还需要通过格式化处理(输入流预处理)，才能得到规范化的字符流数据。

* **加载：** 浏览器加载上述处理得到的字符流数据。浏览器对一个html文件的加载顺序是从上而下的。GUI渲染线程与JS引擎线程是互斥的。
当加载到外部css文件、图片等资源，浏览器会再发起一次http请求，来获取外部资源，这类静态资源不会阻塞线程。(加载、解析、渲染同步进行)
当加载到js文件，GUI渲染线程会被挂起（遇到script会立即执行一次paint，将已生成的渲染树绘制出来），等待js文件加载、解析完毕才可以恢复渲染线程。这也是为什么尽量将script标签放在body闭合标签前。

* **解析：** 解析文档是指将文档转化成为浏览器可识别的代码。解析分为两个环节：**令牌化**、**构建DOM树和CSSOM树**

   - **令牌化**
   识别字符流数据中的标签、文本等，生成类似如下令牌结构：

         开始标签:html
            开始标签:head
            结束标签:head
            开始标签:body
               字符串:我是文本
            结束标签:body
         结束标签:html

   - **构建DOM树**
  
      HTML解析得到的是DOM树，也称节点树。构建过程大致为：
      1. 浏览器创建解析器和一个Document对象；
      2. 解析器读取令牌，根据HTML5标准，将令牌映射成dom元素，插入到以Document为根节点的dom树对象。
      
      生成的dom树结构如下图：

      ![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf379ad01fd675039.png)

   - **构建CSSOM树**
   
      css解析得到的是样式表对象。构建过程与DOM树基本一致，区别在于，CSSOM树节点具有继承性，也就是会先继承父节点样式作为当前样式，然后再进行补充或覆盖。
      
      生成的CSSOM树结构如下图：
      
      ![](https://gitee.com/jerry-zhang/image-database/raw/master/img/5cf37959b269189230.png)

* **渲染：** 有了DOM树和CSSOM树，渲染引擎就开始生成页面了。该过程包括：**构建渲染树**、**布局**、**绘制**。

   - **构建渲染树**
      将DOM树与CSSOM树合并，生成Render Tree的过程大致为：渲染引擎从根节点开始遍历 DOM 树，并按从下向上的顺序从 CSSOM 树节点中找到匹配的样式规则，生成渲染树（包含每个节点的视觉信息，可以想象成是个三维的树）。

   - **布局**
      生成布局（layout），即将渲染树的所有节点进行平面排布（flow）（可以想象成是三维树排布成平面树，若再次触发这种排布，就称为重排或回流）。

   - **绘制**
      将布局绘制（print）在屏幕上（若再次触发这种绘制，就称为重绘）。

   补充：      
   1. 渲染过程的性能消耗主要是布局和绘制；
   2. 重排一定重绘，重绘不一定重排
   3. dom操作很消耗性能的原因：a.涉及JS引擎和渲染引擎跨线程的通信; b.会频繁触发重排和重绘。

## 七、四次挥手断开连接

![20200720093750](https://gitee.com/jerry-zhang/image-database/raw/master/picgo/20200720093750.jpg)


互联网协议的角度(由上至下，从用户使用的角度)：

1. 访问 www.google.com

   意味着发送一个网络请求的数据包

2. DNS 协议

   发送数据包，需要知道对方的IP地址。DNS协议可以通过网址获得IP地址。

3. 子网掩码

   有了IP地址，需通过子网掩码判断是不是在同一个子网络。分别将本机IP、接收方IP与子网掩码做AND运算，若运算结果相同则在同一子网络，否则不在同一子网络。      
   若不在同一子网络，需通过网关转发，那么，接收方的MAC地址将是本机子网络的MAC地址。    

4. 应用层协议

   使用HTTP协议

5. TCP协议

   为数据包设置端口，包括接收方的端口(HTTP默认为80)、发送方的端口。

6. IP协议

   为数据包设置IP地址，包括接收方IP、发送方IP。

7. 以太网协议

   为数据包设置MAC地址，包括接收方MAC地址(本机子网络的MAC地址，通过ARP协议获取)、发送方MAC地址(本机的网卡MAC地址)。

8. 服务端响应

   根据IP头部序号，将数据包拼接起来，从而获得完整的TCP数据包，然后读出里面的HTTP请求，接着做出HTTP响应，再用TCP协议发回去。