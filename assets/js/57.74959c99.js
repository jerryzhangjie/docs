(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{413:function(e,n,a){"use strict";a.r(n);var t=a(44),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"一、jquery-设计思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、jquery-设计思想"}},[e._v("#")]),e._v(" 一、jQuery 设计思想")]),e._v(" "),a("p",[e._v("jQuery 的基本设计思想就是：选择某个网页元素，然后对其进行某种操作。具体来说，包含以下设计思想：")]),e._v(" "),a("h3",{attrs:{id:"_1-选择网页元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-选择网页元素"}},[e._v("#")]),e._v(" 1. 选择网页元素")]),e._v(" "),a("p",[e._v("通过将选择表达式(css选择器、jQuery选择器)放入jQuery构造函数的方式，即$('#id')，然后得到被选中的元素对象。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("// css选择器\n$('#myId') //选择ID为myId的网页元素\n    \n// jQuery选择器\n$('a:first')        // 选择网页中第一个a元素\n$('tr:odd')         // 选择表格的奇数行\n$('#myForm :input') // 选择表单中的input元素\n$('div:visible')    // 选择可见的div元素\n$('div:gt(2)')      // 选择所有的div元素，除了前三个\n$('div:animated')   // 选择当前处于动画状态的div元素\n")])])]),a("h3",{attrs:{id:"_2-改变结果集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-改变结果集"}},[e._v("#")]),e._v(" 2. 改变结果集")]),e._v(" "),a("p",[e._v("得到被选中元素后，可以通过过滤器、移动方法来改变选中结果。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("// 过滤器\n$('div').not('.myClass'); //选择class不等于myClass的div元素\n$('div').eq(5); //选择第6个div元素\n$('div').has('p'); // 选择包含p元素的div元素\n\n// 移动方法\n$('div').next('p'); //选择div元素后面的第一个p元素\n$('div').parent(); //选择div元素的父元素\n$('div').children(); //选择div的所有子元素\n$('div').siblings(); //选择div的同级元素\n")])])]),a("h3",{attrs:{id:"_3-链式操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-链式操作"}},[e._v("#")]),e._v(" 3. 链式操作")]),e._v(" "),a("p",[e._v("所有操作可以连接在一起，以链条的形式写出来，它的原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以连在一起。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$('div').find('h3').eq(2).html('Hello');\n\n$('div')\n.find('h3')\n.eq(2)\n.html('Hello')\n.end() //退回到选中所有的h3元素的那一步\n.eq(0) //选中第一个h3元素\n.html('World'); //将它的内容改为World\n")])])]),a("h3",{attrs:{id:"_4-元素方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-元素方法"}},[e._v("#")]),e._v(" 4. 元素方法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("// 取值、赋值\n$('h1').html(); //html()没有参数，表示取出h1的值\n$('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值\n\n.html() 取出或设置html内容\n.text() 取出或设置text内容\n.attr() 取出或设置某个属性的值\n.width() 取出或设置某个元素的宽度\n.height() 取出或设置某个元素的高度\n.val() 取出某个表单元素的值\n\n// 移动\n.insertAfter()和.after()：在现存元素的外部，从后面插入元素\n.insertBefore()和.before()：在现存元素的外部，从前面插入元素\n.appendTo()和.append()：在现存元素的内部，从后面插入元素\n.prependTo()和.prepend()：在现存元素的内部，从前面插入元素\n\n// 复制、删除、创建\n.clone()  复制元素\n.remove()和.detach()  删除元素，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用\n.empty()  清空元素内容（但是不删除该元素）\n$('<p>Hello</p>')  创建新元素\n")])])]),a("h3",{attrs:{id:"_5-工具方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-工具方法"}},[e._v("#")]),e._v(" 5. 工具方法")]),e._v(" "),a("p",[e._v("工具方法（utility）不必选中元素，就可以直接使用这些方法。它是定义在jQuery构造函数上的方法，即jQuery.method()，所以可以直接使用。而那些操作元素的方法，是定义在构造函数的prototype对象上的方法，即jQuery.prototype.method()，所以必须生成实例（即选中元素）后使用。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$.trim() 去除字符串两端的空格\n$.each() 遍历一个数组或对象\n$.extend() 将多个对象，合并到第一个对象\n$.isArray() 判断某个参数是否为数组\n")])])]),a("h3",{attrs:{id:"_6-事件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-事件操作"}},[e._v("#")]),e._v(" 6. 事件操作")]),e._v(" "),a("p",[e._v("把事件直接绑定在网页元素之上")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$('p').click(function(){\n    alert('Hello');\n});\n\n.blur() 表单元素失去焦点\n.change() 表单元素的值发生变化\n.dblclick() 鼠标双击\n.load() 元素加载完毕\n.ready() DOM加载完成\n.resize() 浏览器窗口的大小发生改变\n.one()  事件只运行一次，用法同 .on()或.bind()\n...\n")])])]),a("p",[e._v("这些事件在jQuery内部，都是.bind()的便捷方式。使用.bind()可以更灵活地控制事件，比如为多个事件绑定同一个函数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$('input').bind(\n    'click change', //同时绑定click和change事件\n    function() {\n        alert('Hello');\n    }\n);\n")])])]),a("p",[e._v(".unbind()用来解除事件绑定")]),e._v(" "),a("p",[e._v("在事件处理函数中，可以用this关键字，指代事件针对的DOM元素")]),e._v(" "),a("p",[e._v("有两种方法，可以自动触发一个事件。一种是直接使用事件函数，另一种是使用.trigger()或.triggerHandler()。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$('a').click();\n$('a').trigger('click');\n")])])]),a("h3",{attrs:{id:"_7-特殊效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-特殊效果"}},[e._v("#")]),e._v(" 7. 特殊效果")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(".fadeIn() 淡入\n.fadeOut() 淡出\n.fadeTo() 调整透明度\n.hide() 隐藏元素\n.show() 显示元素\n")])])]),a("h1",{attrs:{id:"二、常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、常见问题"}},[e._v("#")]),e._v(" 二、常见问题")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("dom")]),e._v("对象与"),a("code",[e._v("jQuery")]),e._v("对象互转")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" var pDom = document.querySelectorAll('p')\n var $pDom = $('p')\n \n // dom 转 jQuery\n var $pDom1 = $(pDom)\n\n // jQuery 转 dom，分两种情况\n // 情况一：jQuery 对象只含有一个元素，例如 $('#p')\n var pDom1 = $pDom[0]      // 方法1\n var pDom2 = $pDom.get(0)  // 方法2\n // 情况二：jQuery 对象含有多个元素，例如 $('p')\n var pDom1 = []\n var len = $pDom.length\n for(var i = 0; i < len; i++) {\n     pDom1.push($pDom[i])\n }\n")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("jQuery")]),e._v("是如何实现链式操作的（详见"),a("code",[e._v("zQuery.html")]),e._v("）")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("jQuery Dom")]),e._v("的方法都定义在"),a("code",[e._v("$")]),e._v("的原型对象上，且每个方法都返回"),a("code",[e._v("this")]),e._v("对象(即修饰后的"),a("code",[e._v("jQuery Dom")]),e._v(")；")]),e._v(" "),a("li",[a("code",[e._v("$")]),e._v("的原型对象的构造函数的原型对象指向"),a("code",[e._v("$")]),e._v("的原型对象 - "),a("code",[e._v("$.fn.init.prototype = $.fn")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("jQuery")]),e._v("如何封装自定义插件"),a("br"),e._v("\n利用方法"),a("code",[e._v("extend")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("对象方法的插件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   ;(function($){                      //添加';'号 是为了防止前面的js少写';'号 影响我们的插件\n       $.fn.extend({               \n           plugName: function(arg){    //插件名称\n               /* 插件逻辑 */\n           }\n       });\n   })(jQuery);                         //传入jQuery对象\n\n   // 使用\n   $(selector).plugName(arg)\n")])])])]),e._v(" "),a("li",[a("p",[e._v("全局方法的插件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("   ;(function($){                      //添加';'号 是为了防止前面的js少写';'号 影响我们的插件\n       $.extend({                  \n           plugName: function(arg){    //插件名称\n               /* 插件逻辑 */\n           }\n       });\n   })(jQuery);                         //传入jQuery对象\n   \n   // 使用\n   $.plugName(arg)")])])])])])])])])}),[],!1,null,null,null);n.default=r.exports}}]);