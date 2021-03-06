> JS 运行机制包含两部分：编译机制、执行机制

## 编译机制

程序通常都是由高级语言编写的，计算机不能理解高级语言，只能理解和运行机器语言，这就需要将高级语言转换为机器语言，而这个转换过程就叫做“编译”。        
JS 是解释型语言，不同于编译型语言的提前编译，解释型语言是在运行时才进行编译。       
编译过程可分为：词法分析 ——> 语法分析 ——> 预编译解析

#### 1. 词法分析

词法分析阶段，逐个字符读取代码字符串，并根据JS语法规则识别每个单词，最终生成**令牌(Token)流**。

#### 2. 语法分析

语法分析阶段，读取令牌(Token)流，生成**抽象语法树(AST)**。JS 的语法检查是在该阶段完成的，当有语法错误时，会抛出错误。

#### 3. 预编译解析

预编译解析阶段，最主要的作用是生成“**执行上下文**”。预编译解析发生在代码即将执行前。

JS 主要有两种上下文环境：全局环境、函数环境

执行全局代码时，发生预编译解析，过程如下：
    * 创建 GO（Global Object）全局对象（即 window 对象）
    * 为变量声明赋值undefined，为函数声明赋值函数体
    * 为变量声明赋实际值(涉及变量提升)
    * 生成全局执行上下文。

执行函数时，发生预编译解析，过程如下：
    * 创建 AO（Active Object）活动对象
    * 为形参、变量声明赋值undefined，为函数声明赋值函数体
    * 将实参赋值给形参，为变量声明赋实际值(涉及变量提升)
    * 生成函数执行上下文。

注：VO（Variable Object）在全局上下文中是 GO，在函数上下文中是 AO

## 执行机制

> JS 是单线程语言，那么异步代码是如何执行的呢？

#### 1. 基本概念
* **任务**  
  可以理解为一段可执行的代码  
* **同步任务/异步任务**  
  同步任务：会立即执行的任务  
  异步任务：不会立即执行的任务
* **堆 / 栈 / 队列**  
  **堆**：一棵完全二叉树，可看做一种树状存储空间，在js中为对象(或称为引用类型，而基本类型存储在栈中)动态分配存储内存。  
  **栈**：一种操作受限的线性表，仅允许在表的同一端插入和删除，可以类比向被子里装乒乓球。特性 —— 先进后出。函数调用形成栈帧。  
  **队列**：一种操作受限的线性表，仅允许在表尾插入，在表头删除，可以类比排队下车。特性 —— 先进先出。例如任务事件队列。
* **进程 / 线程**  
  **进程**：操作系统资源分配的基本单位，可简单理解为每个运行的应用程序就是一个(主)进程。  
  **线程**：任务调度和执行的基本单位，可简单理解为进程中用于执行任务的基本单位。   
  对应到浏览器（）：
  * 浏览器是多进程的，当打开浏览器就创建了主进程，每打开一个tab页就会创建一个渲染进程；
  * 渲染进程是多线程的，主要包括：GUI渲染线程、JS引擎线程(只能有一个JS线程执行JS代码)、异步线程组（事件触发线程、异步http请求线程、定时触发器线程）。GUI渲染线程与JS引擎线程互斥，不能同时执行。  
  参考 [浏览器运行机制](https://github.com/jerryzhangjie/Blog/blob/master/Front-end/3%20-%20%E5%B7%A5%E5%85%B7%E4%B8%8E%E7%8E%AF%E5%A2%83/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.md)，加入了个人理解。

#### 2. 单线程
Javascript 是一门单线程编程语言，即便事件循环、ajax、Promise以及web-worker等赋予了Javascript异步编程或“多线程”的外在表现，但依然无法改变其单线程的本质。因为上述特性都是在单线程和异步原理基础上模拟出来的。  
Javascript 设计成单线程的原因：JS 可以操作 dom，若多线程同时操作一个 dom 元素，将会出现 dom 渲染冲突的情况。所以，**为了避免dom渲染冲突，JS 必须是单线程语言**。

#### 3. 事件循环机制
通常来说，执行多任务的方式有：多进程、单进程多线程。  
由于JS是单线程语言，所以JS引擎设计成只能同时有一个JS线程执行JS代码，那么如何实现执行多任务呢？  
单靠JS引擎线程显然是无法实现的，解决方法是JS引擎线程结合异步线程组实现事件循环机制。先看一段代码：

    let data = [];
    $.ajax({
        url: www.javascript.com,
        data: data,
        success: () => {
            console.log('ajax请求成功');
        }
    })
    console.log('代码执行结束');

我们都知道，执行结果为： `代码执行结束、   ajax请求成功`。  
主程序执行过程中并未阻塞ajax请求的执行，也就是说，这两个任务是同时执行的。而输出顺序的先后说明ajax的回调函数success是在主程序之后才执行的。  
这段代码的实际执行流程可概括如下图：

![20200730103043](https://gitee.com/jerry-zhang/image-database/raw/master/picgo/20200730103043.jpg)

1. 任务进入JS线程(JS引擎线程，即主线程)的执行栈，判断该任务为同步任务或异步任务；
2. 同步任务继续在JS线程中执行直至全部执行完毕；
3. 渲染进程为异步任务创建异步线程(定时触发器线程、http请求线程）执行异步任务，异步任务的回调或事件绑定的回调被注册到事件触发线程中，异步任务完成后由事件触发线程将回调函数压入事件队列，异步线程和JS线程独立运行，互不干扰；
4. JS线程不断的检查执行栈是否为空，若为空（即主线程空闲），则读取事件队列队首的回调函数并压入执行栈进行执行。执行结束后，再次检查执行栈是否为空，再次读取事件队列中的回调函数并压入执行栈进行执行，依次循环，即为JS的**事件循环机制**。

#### 4.宏任务和微任务
事件循环约束了JS单线程模式下多任务的执行机制，当然，多任务是对于异步任务而言的。
我们知道JS中有多种类型的异步任务，那么当不同类型的异步任务存在是，执行机制又是怎样的呢？看一段代码：

    setTimeout(function() {
        console.log('1');
    }, 0)

    new Promise(function(resolve) {
        console.log('2');
        resolve();
    }).then(function() {
        console.log('3');
    })

    console.log('4');

基于 **3** 中的讨论，若异步任务不加以区分，输出结果大概为：`2 4 1 3`，但实际输出结果为：`2 4 3 1`。

显然，除同步任务异步任务外，事件循环机制对任务做了其它区分。

任务又可进一步区分为：
* 宏任务(Macro-task)：整体代码(同步任务)、setTimeout、setInterva、ajax
* 微任务(Micro-task)：Promise、nodejs的process.nextTick（总是发生在所有异步任务之前）

由此以来，事件循环的更详细表述就成了这样：
1. 任务进入JS线程的执行栈，判断该任务为同步任务或异步任务，若为异步任务则进一步判断是宏任务还是微任务；
2. 同步任务继续在JS线程中执行直至全部执行完毕（整体代码为宏任务）；
3. 浏览器渲染进程为异步任务创建异步线程(定时触发器线程、http请求线程)执行异步任务，异步任务的回调或事件绑定的回调被注册到事件触发线程中，异步任务完成后由事件触发线程将宏任务的回调函数压入宏任务事件队列，将微任务的回调函数压入微任务事件队列，异步线程和JS线程独立运行，互不干扰；
4. JS线程不断的检查执行栈是否为空，若为空，则读取事件队列队首的回调函数并压入执行栈进行执行。事件循环的顺序为：**先执行宏任务(整体代码或回调)，再执行当前宏任务回调中出现过的微任务，接着执行宏任务事件队列中的下一个宏任务，接着再执行当前宏任务回调中出现过的微任务，依次循环。**（可结合流程图及代码理解这个过程）

![Screenshot0730-1050](https://gitee.com/jerry-zhang/image-database/raw/master/picgo/Screenshot0730-1050.jpg)

        console.log('1');   // 整体代码  
        setTimeout(function() {   // 宏任务1  
            console.log('2');
            new Promise(function(resolve) {   // 微任务1-1  
                resolve();
            }).then(function() {
                console.log('3')
            })
            new Promise(function(resolve) {   // 微任务1-2  
                console.log('4');
                resolve();
            }).then(function() {
                console.log('5')
            })
        })
        new Promise(function(resolve) {   // 微任务1  
            resolve();
        }).then(function() {
            console.log('6')
        })
        new Promise(function(resolve) {   // 微任务2  
            console.log('7');
            resolve();
        }).then(function() {
            console.log('8')
        })
        setTimeout(function() {   // 宏任务2  
            console.log('9');
            setTimeout(function() {   // 宏任务2-1  
              console.log('10')
            })
            new Promise(function(resolve) {   // 微任务2-1  
                console.log('11');
                resolve();
            }).then(function() {
                console.log('12')
            })
        })

执行：（数组模拟事件队列，数组头象征队列尾，数组尾象征队列头，队列特征：队尾压入队头取出，先进先出）
1. 执行`整体代码`(宏任务)，得到 - 宏任务事件队列：[`宏任务2回调`, `宏任务1回调`]，微任务事件队列：[`微任务2回调`, `微任务1回调`]。输出：1、7
2. 执行`微任务1回调`，此时 - 宏任务事件队列：[`宏任务2回调`, `宏任务1回调`]，微任务事件队列：[`微任务2回调`]。输出：6
3. 执行`微任务2回调`，此时 - 宏任务事件队列：[`宏任务2回调`, `宏任务1回调`]，微任务事件队列：[]。输出：8
4. 执行`宏任务1回调`，此时 - 宏任务事件队列：[`宏任务2回调`]，微任务事件队列：[`微任务1-2回调`, `微任务1-1回调`]。输出：2、4
5. 执行`微任务1-1回调`，此时 - 宏任务事件队列：[`宏任务2回调`]，微任务事件队列：[`微任务1-2回调`]。输出：3
6. 执行`微任务1-2回调`，此时 - 宏任务事件队列：[`宏任务2回调`]，微任务事件队列：[]。输出：5
7. 执行`宏任务2回调`，此时 - 宏任务事件队列：[`宏任务2-1回调`]，微任务事件队列：[`微任务2-1回调`]。输出：9、11
8. 执行`微任务2-1回调`，此时 - 宏任务事件队列：[`宏任务2-1回调`]，微任务事件队列：[]。输出：12
9. 执行`宏任务2-1回调`，此时 - 宏任务事件队列：[]，微任务事件队列：[]。输出：10  

综上最终输出为：1、7、6、8、2、4、3、5、9、11、12、10

本文参考：
* https://segmentfault.com/a/1190000018001871
* https://juejin.im/search?query=%E5%AE%8F%E4%BB%BB%E5%8A%A1&type=all
* https://juejin.im/post/59e85eebf265da430d571f89
* https://juejin.im/post/5b73d7a6518825610072b42b
* https://blog.csdn.net/dreamingbaobei3/article/details/89513338

大致总结事件循环机制，很多内容为自我理解，所以很多细节经不起推敲，我也会随着理解的加深，逐步纠正、补充本文，如有发现错误请不吝指教～

### 其它
我将学习、工作中的积累做成了开源项目：[Blog](https://github.com/Zhang-Jerry/Blog)

欢迎关注并一起讨论学习。
