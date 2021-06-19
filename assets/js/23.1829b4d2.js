(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{380:function(e,t,a){"use strict";a.r(t);var s=a(44),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("webpack 是一个现代 JavaScript 应用程序的静态模块打包器。通过将应用程序所需的每个模块，递归地构建成一个依赖关系图，然后打包成一个或者多个 bundle。")])]),e._v(" "),a("h2",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[e._v("#")]),e._v(" entry")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    module.exports = {\n        entry: './path/to/my/entry/file.js'\n    };\n")])])]),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    const path = require('path');\n\n    module.exports = {\n        entry: './path/to/my/entry/file.js',\n        output: {\n            path: path.resolve(__dirname, 'dist'),      // path.resolve 从右向左拼接路径并返回绝对路径      __dirname 当前目录\n            filename: 'my-first-webpack.bundle.js'\n        }\n    };\n")])])]),a("h2",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" loader")]),e._v(" "),a("p",[e._v("功能：")]),e._v(" "),a("ul",[a("li",[e._v("webpack 本身只能理解 JS（ES5）；")]),e._v(" "),a("li",[e._v('在 import 或"加载"模块时预处理文；')]),e._v(" "),a("li",[e._v("不同的 loader 让 webpack 理解不同类型的文件（ES6+、jsx、png、css、less等）；")]),e._v(" "),a("li",[e._v("loader 将各种类型文件转换为 webpack 能打包处理的模块；")])]),e._v(" "),a("p",[e._v("主要配置项：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("test 指定应该被转换的每个或某些文件（支持正则）")])]),e._v(" "),a("li",[a("p",[e._v("use 指定用于转换的loader")])]),e._v(" "),a("li",[a("p",[e._v("exclude 指定需要忽略的文件（支持正则）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  module: {\n      rules: [\n          {\n              test: /\\.txt$/, \n              use: 'raw-loader' \n          }\n      ]\n  }\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),a("p",[e._v("功能：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("功能范围很广，执行除文件类型转换外的其它任务，例如：打包优化、代码压缩、重定义环境变量等")])]),e._v(" "),a("li",[a("p",[e._v("用于解决 loader 无法实现的其它事。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("  plugins: [\n      new HtmlWebpackPlugin({template: './src/index.html'})\n  ]\n")])])])])]),e._v(" "),a("p",[e._v("常用插件：")]),e._v(" "),a("ul",[a("li",[e._v("clean-webpack-plugin: ClearWebpackPlugin 清空打包目录 dist")]),e._v(" "),a("li",[e._v("webpack-bundle-analyzer: BundleAnalyzerPlugin 可视化分析打包后的文件构成")]),e._v(" "),a("li")]),e._v(" "),a("h2",{attrs:{id:"模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[e._v("#")]),e._v(" 模式")]),e._v(" "),a("p",[e._v("功能：")]),e._v(" "),a("p",[e._v("启用相应模式下的 webpack 内置的优化")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    module.exports = {\n        mode: 'production'      // development 或 production\n    };")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);