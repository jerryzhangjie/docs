# 一、jQuery 设计思想

jQuery 的基本设计思想就是：选择某个网页元素，然后对其进行某种操作。具体来说，包含以下设计思想：

### 1. 选择网页元素

通过将选择表达式(css选择器、jQuery选择器)放入jQuery构造函数的方式，即$('#id')，然后得到被选中的元素对象。

    // css选择器
    $('#myId') //选择ID为myId的网页元素
        
    // jQuery选择器
    $('a:first')        // 选择网页中第一个a元素
    $('tr:odd')         // 选择表格的奇数行
    $('#myForm :input') // 选择表单中的input元素
    $('div:visible')    // 选择可见的div元素
    $('div:gt(2)')      // 选择所有的div元素，除了前三个
    $('div:animated')   // 选择当前处于动画状态的div元素

### 2. 改变结果集

得到被选中元素后，可以通过过滤器、移动方法来改变选中结果。

    // 过滤器
    $('div').not('.myClass'); //选择class不等于myClass的div元素
    $('div').eq(5); //选择第6个div元素
    $('div').has('p'); // 选择包含p元素的div元素

    // 移动方法
    $('div').next('p'); //选择div元素后面的第一个p元素
    $('div').parent(); //选择div元素的父元素
    $('div').children(); //选择div的所有子元素
    $('div').siblings(); //选择div的同级元素

### 3. 链式操作

所有操作可以连接在一起，以链条的形式写出来，它的原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以连在一起。

    $('div').find('h3').eq(2).html('Hello');

    $('div')
    .find('h3')
    .eq(2)
    .html('Hello')
    .end() //退回到选中所有的h3元素的那一步
    .eq(0) //选中第一个h3元素
    .html('World'); //将它的内容改为World

### 4. 元素方法

    // 取值、赋值
    $('h1').html(); //html()没有参数，表示取出h1的值
    $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值

    .html() 取出或设置html内容
    .text() 取出或设置text内容
    .attr() 取出或设置某个属性的值
    .width() 取出或设置某个元素的宽度
    .height() 取出或设置某个元素的高度
    .val() 取出某个表单元素的值

    // 移动
    .insertAfter()和.after()：在现存元素的外部，从后面插入元素
    .insertBefore()和.before()：在现存元素的外部，从前面插入元素
    .appendTo()和.append()：在现存元素的内部，从后面插入元素
    .prependTo()和.prepend()：在现存元素的内部，从前面插入元素

    // 复制、删除、创建
    .clone()  复制元素
    .remove()和.detach()  删除元素，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用
    .empty()  清空元素内容（但是不删除该元素）
    $('<p>Hello</p>')  创建新元素

### 5. 工具方法

工具方法（utility）不必选中元素，就可以直接使用这些方法。它是定义在jQuery构造函数上的方法，即jQuery.method()，所以可以直接使用。而那些操作元素的方法，是定义在构造函数的prototype对象上的方法，即jQuery.prototype.method()，所以必须生成实例（即选中元素）后使用。

    $.trim() 去除字符串两端的空格
    $.each() 遍历一个数组或对象
    $.extend() 将多个对象，合并到第一个对象
    $.isArray() 判断某个参数是否为数组

### 6. 事件操作

把事件直接绑定在网页元素之上

    $('p').click(function(){
        alert('Hello');
    });

    .blur() 表单元素失去焦点
    .change() 表单元素的值发生变化
    .dblclick() 鼠标双击
    .load() 元素加载完毕
    .ready() DOM加载完成
    .resize() 浏览器窗口的大小发生改变
    .one()  事件只运行一次，用法同 .on()或.bind()
    ...

这些事件在jQuery内部，都是.bind()的便捷方式。使用.bind()可以更灵活地控制事件，比如为多个事件绑定同一个函数：

    $('input').bind(
        'click change', //同时绑定click和change事件
        function() {
            alert('Hello');
        }
    );

.unbind()用来解除事件绑定

在事件处理函数中，可以用this关键字，指代事件针对的DOM元素

有两种方法，可以自动触发一个事件。一种是直接使用事件函数，另一种是使用.trigger()或.triggerHandler()。

    $('a').click();
    $('a').trigger('click');

### 7. 特殊效果

    .fadeIn() 淡入
    .fadeOut() 淡出
    .fadeTo() 调整透明度
    .hide() 隐藏元素
    .show() 显示元素

# 二、常见问题

1. `dom`对象与`jQuery`对象互转

        var pDom = document.querySelectorAll('p')
        var $pDom = $('p')
        
        // dom 转 jQuery
        var $pDom1 = $(pDom)

        // jQuery 转 dom，分两种情况
        // 情况一：jQuery 对象只含有一个元素，例如 $('#p')
        var pDom1 = $pDom[0]      // 方法1
        var pDom2 = $pDom.get(0)  // 方法2
        // 情况二：jQuery 对象含有多个元素，例如 $('p')
        var pDom1 = []
        var len = $pDom.length
        for(var i = 0; i < len; i++) {
            pDom1.push($pDom[i])
        }

2. `jQuery`是如何实现链式操作的（详见`zQuery.html`）     
   * `jQuery Dom`的方法都定义在`$`的原型对象上，且每个方法都返回`this`对象(即修饰后的`jQuery Dom`)；
   * `$`的原型对象的构造函数的原型对象指向`$`的原型对象 - `$.fn.init.prototype = $.fn`

3. `jQuery`如何封装自定义插件       
   利用方法`extend`     

   * 对象方法的插件
  
            ;(function($){                      //添加';'号 是为了防止前面的js少写';'号 影响我们的插件
                $.fn.extend({               
                    plugName: function(arg){    //插件名称
                        /* 插件逻辑 */
                    }
                });
            })(jQuery);                         //传入jQuery对象

            // 使用
            $(selector).plugName(arg)

   * 全局方法的插件

            ;(function($){                      //添加';'号 是为了防止前面的js少写';'号 影响我们的插件
                $.extend({                  
                    plugName: function(arg){    //插件名称
                        /* 插件逻辑 */
                    }
                });
            })(jQuery);                         //传入jQuery对象
            
            // 使用
            $.plugName(arg)