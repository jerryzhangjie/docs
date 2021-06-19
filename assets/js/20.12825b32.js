(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(t,n,e){"use strict";e.r(n);var o=e(44),_=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("Javascript 是面向对象语言，但不同于 C++、Java 等基于"),e("strong",[t._v("类")]),t._v("的实现原理，JS 的面向对象和继承都是基于"),e("strong",[t._v("原型链")]),t._v("实现的。本文就将深入浅出的对其实现原理进行分析。")])]),t._v(" "),e("h2",{attrs:{id:"一、-语言特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-语言特性"}},[t._v("#")]),t._v(" 一、 语言特性")]),t._v(" "),e("p",[t._v("开始剖析原理前，需要记住几个 JS 语言层面的特性：")]),t._v(" "),e("ul",[e("li",[t._v("特性1："),e("strong",[t._v("函数都是对象")]),t._v("，其实引用类型(function、object、array)都是对象； —— 可由 typeof 和 instanceof 验证")]),t._v(" "),e("li",[t._v("特性2："),e("strong",[t._v("函数都有一个 prototype 属性")]),t._v("； —— 属性值是一个对象，称为“原型对象”")]),t._v(" "),e("li",[t._v("特性3："),e("strong",[t._v("对象都是函数创建的，对象都是属性的集合")]),t._v("； —— {} 等形式只是语法糖；")]),t._v(" "),e("li",[t._v("特性4："),e("strong",[t._v("对象都有一个 __proto__ 属性")]),t._v("； —— 即“隐式原型”，属性值指向创建该对象的函数的“原型对象”；")])]),t._v(" "),e("h2",{attrs:{id:"二、-函数与对象的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、-函数与对象的关系"}},[t._v("#")]),t._v(" 二、 函数与对象的关系")]),t._v(" "),e("p",[t._v("上边提到“函数都是对象”、“对象都是函数创建的”，那么二者到底什么关系呢？")]),t._v(" "),e("p",[t._v("一种常见的创建对象的方式如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("var foo = new Fn()\n")])])]),e("p",[t._v("通常，我们称"),e("code",[t._v("Fn")]),t._v("为构造"),e("strong",[t._v("函数")]),t._v("，"),e("code",[t._v("foo")]),t._v("为实例"),e("strong",[t._v("对象")]),t._v("。")]),t._v(" "),e("p",[t._v("通过上述特性可知："),e("br"),t._v(" "),e("strong",[t._v("构造函数")]),t._v("也是函数，所以它也有一个"),e("code",[t._v("prototype")]),t._v("属性，属性值是一个对象，称为该函数的"),e("strong",[t._v("原型对象")]),t._v("。"),e("br"),t._v(" "),e("strong",[t._v("实例对象")]),t._v("也是对象，所以它也有一个"),e("code",[t._v("__proto__")]),t._v("属性，属性值也是"),e("strong",[t._v("原型对象")]),t._v("。"),e("br"),t._v("\n此外，"),e("strong",[t._v("原型对象")]),t._v("默认有一个"),e("code",[t._v("constrcutor")]),t._v("属性，指向"),e("strong",[t._v("构造函数")]),t._v("。")]),t._v(" "),e("p",[t._v("即以下关系是成立的：")]),t._v(" "),e("ul",[e("li",[t._v("foo.__proto__ === Fn.prototype")]),t._v(" "),e("li",[t._v("Fn.prototype.constructor = Fn")])]),t._v(" "),e("p",[t._v("实例对象、构造函数、原型对象 三者间的关系如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/jerry-zhang/image-database/raw/master/picgo/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200713195715.jpg",alt:"微信图片_20200713195715"}})]),t._v(" "),e("p",[t._v("上图中原型对象(Fn.prototype)也是对象，那么它的 __proto__ 属性值是什么呢？")]),t._v(" "),e("p",[t._v("其实，自定义函数的 prototype 本质上和 var obj = {} 是一样的，都是被 Object 函数创建，所以它的__proto__指向的就是Object.prototype。但Object.prototype比较特殊，它的__proto__指向null。")]),t._v(" "),e("p",[t._v("原型链关系可总结为下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/jerry-zhang/image-database/raw/master/picgo/181637013624694.png",alt:"181637013624694"}})]),t._v(" "),e("p",[t._v("很容易得知：console.log(f1 instanceof Foo)  // true。instanceof第一个参数是对象，暂时称为A；第二个参数是函数，暂时称为B。"),e("br"),t._v("\ninstanceof 的判断规则是：如果 B 的 prototype 出现在 A 的 __proto__ 原型链上，则返回true，否则返回false。")]),t._v(" "),e("p",[t._v("// 实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("    function myInstanceof(left, right) {\n        let proto = Object.getPrototypeOf(left)\n        let prototype = right.prototype\n        while (true) {\n            if (proto === null) return false    // 函数中的 return 会提前终止函数，即便 return 在循环中\n            if (proto === prototype) return true\n            proto = Object.getPrototypeOf(proto)\n        }\n    }\n")])])]),e("p",[t._v("通过上述规则，可以解析以下怪异现象：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("    console.log(Object instanceof Function)     // true\n    console.log(Function instanceof Object)     // true\n    console.log(Function instanceof Function)   // true\n")])])]),e("h2",{attrs:{id:"三、-原型链与继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、-原型链与继承"}},[t._v("#")]),t._v(" 三、 原型链与继承")]),t._v(" "),e("p",[t._v("访问一个对象的属性时，先在对象自己的属性中查找，如果没有，再沿着 __proto__ 这条链向上查找，直到 Object.prototype，这就是"),e("strong",[t._v("原型链")]),t._v("。所以，js "),e("strong",[t._v("继承")]),t._v("是基于原型链实现的。")]),t._v(" "),e("p",[t._v("如何区分一个属性是自身的还是从原型中找到的呢？可以使用 hasOwnProperty。")]),t._v(" "),e("p",[t._v("如何获取原型？ o.__proto__  或  o.constructor.prototype  或  Object.getPrototypeOf(o)")]),t._v(" "),e("h2",{attrs:{id:"四、-v8-是如何创建对象的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、-v8-是如何创建对象的"}},[t._v("#")]),t._v(" 四、 V8 是如何创建对象的")]),t._v(" "),e("p",[t._v("Js 代码在执行时，会被 V8 引擎解析，这时 V8 会用不同的模板来处理 Js 中的对象和函数。")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("ul",[e("li",[t._v("ObjectTemplate 用来创建对象")]),t._v(" "),e("li",[t._v("FunctionTemplate 用来创建函数")]),t._v(" "),e("li",[t._v("PrototypeTemplate 用来创建函数原型")])]),t._v(" "),e("p",[t._v("我们可以得到以下结论：")]),t._v(" "),e("ul",[e("li",[t._v("Js 中的函数都是 FunctionTemplate 创建出来的，返回值的是 FunctionTemplate 实例。")]),t._v(" "),e("li",[t._v("Js 中的对象都是 ObjectTemplate 创建出来的，返回值的是 ObjectTemplate 实例。")]),t._v(" "),e("li",[t._v("Js 中函数的原型（prototype）都是通过 PrototypeTemplate 创建出来的，返回值是 ObjectTemplate 实例。")])]),t._v(" "),e("p",[t._v("所以 Js 中的对象的原型可以这样判断：")]),t._v(" "),e("ul",[e("li",[t._v("所有的对象的原型都是 Object.prototype，自定义构造函数的实例除外。")]),t._v(" "),e("li",[t._v("自定义构造函数的实例，它的原型是对应的构造函数原型。")])]),t._v(" "),e("p",[t._v("在 Js 中的函数原型判断就更加简单了：")]),t._v(" "),e("ul",[e("li",[t._v("所有的函数原型，都是 Function.prototype。")]),t._v(" "),e("li",[t._v("所有的内置构造函数，他们的原型都是 Function.prototype。")])]),t._v(" "),e("h2",{attrs:{id:"五、-几种常见的继承实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、-几种常见的继承实现"}},[t._v("#")]),t._v(" 五、 几种常见的继承实现")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("原型链继承")]),t._v(" "),e("p",[t._v("本质：将两个原本无关联的构造函数，通过原型链建立起继承关系")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" // 父类构造函数\n function Father() {\n     this.name = 'father'\n }\n // 子类构造函数\n function Son() {}\n // 要构成继承关系，通过上面的关系图可知，需满足原型链关系 Son.prototype.__proto__ === Father.prototype === (new Father()).__proto__ 也就是如下关系\n Son.prototype = new Father()\n var instance = new Son()\n console.log(instance.name)      // father\n")])])]),e("p",[t._v("缺点：父类中的引用类型属性在子类实例中共用，会导致数据篡改")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" function Father() {\n     this.like = ['apple']\n }\n function Son() {}\n Son.prototype = new Father()\n var instance_1 = new Son()\n instace_1.like.push('orange')\n var instance_2 = new Son()\n instace_2.like.push('banana')\n console.log(instance_1.like)      // ['apple', 'orange', 'banana']\n")])])])]),t._v(" "),e("li",[e("p",[t._v("构造函数继承")]),t._v(" "),e("p",[t._v("本质：创建子类实例时，都调用一下父类的构造函数，等价于子类实例中完整复制一份父类实例的属性。（因为执行了父类的构造函数，所以是复制"),e("strong",[t._v("父类实例")]),t._v("，而不是父类原型）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" function Father() {\n     this.like = ['apple']\n }\n function Son() {\n     // 每次子类实例化，调用父类构造函数，生成父类实例的副本，复制父类实例属性\n     Father.call(this)\n }\n var instance_1 = new Son()\n instace_1.like.push('orange')\n var instance_2 = new Son()\n instace_2.like.push('banana')\n console.log(instance_1.like)        // ['apple', 'orange']\n")])])]),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[t._v("只能继承父类实例的属性和方法，不能继承原型的属性和方法。")]),t._v(" "),e("li",[t._v("每次子类实例化，都要在内存中生成一份父类实例的副本，消耗性能。")])])]),t._v(" "),e("li",[e("p",[t._v("组合继承")]),t._v(" "),e("p",[t._v("本质：组合上述两种方式，用原型链继承实现对原型属性和方法的继承，用构造函数继承实现对父类实例属性和方法的继承。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" function Father() {\n     this.like = ['apple']\n }\n function Son() {\n     // 构造函数继承\n     Father.call(this)   // 第二次调用父类构造函数\n }\n // 原型链继承\n Son.prototype = new Father()    // 第一次调用父类构造函数\n // 重写子类原型的constructor属性，指向自己的构造函数\n Son.prototype.constructor = Son\n")])])]),e("p",[t._v("缺点：")]),t._v(" "),e("ul",[e("li",[t._v("在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法")])])]),t._v(" "),e("li",[e("p",[t._v("ES6类继承extends")]),t._v(" "),e("p",[t._v("ES6引入了class来定义类，并引入了extends来实现继承。本质：先调用父类的构造函数，创建父类的实例对象this，然后再用子类的构造函数来修改this。用法如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" class B extends A {\n     constructor(x, y, color) {\n         super(x, y);    // 调用父类的constructor(x, y)\n         this.color = color\n     }\n }\n")])])]),e("p",[t._v("存在两条继承链：")]),t._v(" "),e("ul",[e("li",[t._v("B.__proto__ = A     作为一个对象，子类的隐式原型是父类。")]),t._v(" "),e("li",[t._v("B.prototype.__proto__ = A.__proto__       作为一个构造函数，子类的显示原型的隐式原型是父类的显示原型。")])]),t._v(" "),e("p",[t._v("extends实现继承的核心代码（寄生组合式继承）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(" function _inherits(subType, superType) {\n     \n     // 创建对象，创建父类原型的一个副本\n     // 增强对象，弥补因重写原型而失去的默认的constructor 属性\n     // 指定对象，将新创建的对象赋值给子类的原型\n     subType.prototype = Object.create(superType && superType.prototype, {\n         constructor: {\n             value: subType,\n             enumerable: false,\n             writable: true,\n             configurable: true\n         }\n     });\n     \n     if (superType) {\n         Object.setPrototypeOf \n             ? Object.setPrototypeOf(subType, superType) \n             : subType.__proto__ = superType;\n     }\n }\n")])])]),e("p",[t._v("这是最成熟的实现继承的方法。有点：1.只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。2.原型链还能保持不变，因此，还能够正常使用instanceof 和isPrototypeOf()")])])]),t._v(" "),e("h2",{attrs:{id:"六、new-做了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、new-做了什么"}},[t._v("#")]),t._v(" 六、new 做了什么")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("    var a = new A(a, b);\n\n当这段代码运行的时候，内部实际上执行的是：\n\n    // 1. 创建一个空对象\n    var o = {};\n\n    // 2. 将空对象的隐式原型指向为构造器函数的显式原型\n    o.__proto__ = A.prototype;  // Object.setPrototypeOf(o, Fn.prototype)\n    \n    // 3. 将构造函数的this指向空对象，并执行该构造函数将属性和方法添加到空对象上，生成实例对象\n    A.call(o, a, b);\n\n注意：构造函数尽量不要返回值。1.无返回值时，会返回创建的实例对象；2.返回原始值时，会忽略该值，并依然返回创建的实例对象；3.返回对象时，new操作符失效，会像执行了函数一样返回该对象。\n\n自己实现 new 操作符：\n\n    // Fn - 构造函数，args - 构造函数的传参\n    function myNew(Fn, ...args) {\n        let obj = {}\n        Object.setPrototypeOf(obj, Fn.prototype)\n        let rtn = Fn.apply(obj, args)\n        return rtn instanceof Object ? rtn : obj    // 原因见上述“注意”\n    }\n")])])]),e("h2",{attrs:{id:"七、-参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、-参考"}},[t._v("#")]),t._v(" 七、 参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/wangfupeng1988/p/3977924.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解javascript原型和闭包"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5bcb2e295188255c55472db0#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript常用八种继承方案"),e("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=_.exports}}]);