## 开发人员文档

---

## 前言

所有协作开发此项目的开发人员，请先认真观看了解此文档，避免在接下来的开发中，造成大规模的冲突

## 文件架构

```
·
├── package.json
│ 
├── public                          打包的数据
│ 
├── src
│   ├── assets                      图片等资源文件
│   │
│   ├── components
│   │    ├─Canvas                   首页动画
│   │    ├─Layouts                  布局组件
│   │    └─ ...
│   │
│   ├── config
│   │    ├─breadItem.js             面包屑配置
│   │    ├─menu.js                  菜单栏配置
│   │    └─ ...
│   │
│   ├── mock
│   │    ├─index                    mock模拟数据
│   │    └─ ...
│   │
│   ├── router                      路由
│   │
│   ├── service                     与服务器相关文件
│   │    ├─api
│   │    ├─request
│   │    └─ ...
│   │
│   ├── store                       vuex模块化
│   │
│   ├── utils
│   │    ├─tool.js                  加载框，提示框
│   │    ├─utils.js                 全局处理函数
│   │    └─ ...
│   │
│   ├── view
│   │    ├─Login                    登陆页
│   │    │
│   │    ├─Manage
│   │    │   ├─Home                 仪表盘
│   │    │   ├─Template             模板分析
│   │    │   └─ ..
│   │    │
│   │    └─ ...
│   │
│   ├──
│   └─
│ 
├── main.js
│ 
├── App.vue
│ 
└─
```

## 环境及技术栈说明

```javascript
    1 . Node.js 版本 v10.6.0

    2 . Vue-cli 版本 v3.0.0

    3 . 其他依赖请移步 package.json

    4 . 其他技术栈请移步 README.md
```

## 开发说明

```javascript
    // 全局说明
    在 main.js 中，我把 api 和 tool 挂载到了 Vue 的 prototype 中，因此，通过 this.$xxx即可操作

    例子 : 调用api中的 getUserInfo 接口，该接口返回的是一个 Promise
        this.$api.getUserInfo().then((res) => {
            console.log(res) // 这就是请求的接口
        })

    // 代码规范说明
    强制要求eslint，但是每个开发人员成员必须书写JS的 standard 代码规范风格。

    // 冲突说明
    如果在开发过程中，出现了代码冲突，请开发人员互相沟通好，并且每个人在每日敲代码前，先拉下团队master分支上的最新代码， 具体不知道团队间协作的，下边会给一个团队协作的链接，请务必认真看

    // 分支说明
    每个人fork的时候，代码push提交自己fork的库中，再发起merge requset合并请求到dev分支上，由管理员“彭道宽”进行审查。

    同意合并之后，由管理员“彭道宽” 合并dev分支到master分支中，master分支始终是线上跑的分支！！！

    // 命名说明
    尽量保证变量名一致，比如父组件给自组件传递 ErekTitle，那么自组件 props 接受为 ErekTitle，再往下传也应该是ErekTitle，尽量保持一个线性并且一致的命名统一

    // 箭头函数的说明
    handleViewData: (item) => {
      console.log(this)   // 这里的this指向不是指到 vue 实例
    }

```

## ESlint 常见报错 (Standard 常见的错误)

```javascript
    1 . 文件末尾存在空行， 也就是说这行代码最后不能存在空行

    2 . 字符串没有使用单引号， 比如 'username' 而不应该是 "username"

    3 . 关键词后面缺少空格，比如 if () {} 而不是 if(){}

    4 . 缩进错误，2个空格，而不是4个空格

    5 . 没有使用全等，比如 if (type === 'new') 而不应该是 if (type == 'new')

    6 . 导入组件却没有使用，比如 import NavBar from './xxx' 却没有使用

    7 . new了一个对象却没有赋值给某个常量

    8 . 超过一行空白行

    9 . 注释符 '//' 后面缩进错误

    10 . 代码换行，不能末尾有空格

```

## ESlint rules

```javascript
"no-alert": 0,//禁止使用alert confirm prompt
"no-array-constructor": 2,//禁止使用数组构造器
"no-bitwise": 0,//禁止使用按位运算符
"no-caller": 1,//禁止使用arguments.caller或arguments.callee
"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
"no-class-assign": 2,//禁止给类赋值
"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
"no-console": 2,//禁止使用console
"no-const-assign": 2,//禁止修改const声明的变量
"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
"no-continue": 0,//禁止使用continue
"no-control-regex": 2,//禁止在正则表达式中使用控制字符
"no-debugger": 2,//禁止使用debugger
"no-delete-var": 2,//不能对var声明的变量使用delete操作符
"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
"no-dupe-args": 2,//函数参数不能重复
"no-duplicate-case": 2,//switch中的case标签不能重复
"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
"no-empty": 2,//块语句中的内容不能为空
"no-empty-character-class": 2,//正则表达式中的[]内容不能为空
"no-empty-label": 2,//禁止使用空label
"no-eq-null": 2,//禁止对null使用==或!=运算符
"no-eval": 1,//禁止使用eval
"no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
"no-extend-native": 2,//禁止扩展native对象
"no-extra-bind": 2,//禁止不必要的函数绑定
"no-extra-boolean-cast": 2,//禁止不必要的bool转换
"no-extra-parens": 2,//禁止非必要的括号
"no-extra-semi": 2,//禁止多余的冒号
"no-fallthrough": 1,//禁止switch穿透
"no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
"no-func-assign": 2,//禁止重复的函数声明
"no-implicit-coercion": 1,//禁止隐式转换
"no-implied-eval": 2,//禁止使用隐式eval
"no-inline-comments": 0,//禁止行内备注
"no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
"no-invalid-regexp": 2,//禁止无效的正则表达式
"no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
"no-irregular-whitespace": 2,//不能有不规则的空格
"no-iterator": 2,//禁止使用__iterator__ 属性
"no-label-var": 2,//label名不能与var声明的变量名相同
"no-labels": 2,//禁止标签声明
"no-lone-blocks": 2,//禁止不必要的嵌套块
"no-lonely-if": 2,//禁止else语句内只有if语句
"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
"no-mixed-requires": [0, false],//声明时不能混用声明类型
"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
"linebreak-style": [0, "windows"],//换行风格
"no-multi-spaces": 1,//不能用多余的空格
"no-multi-str": 2,//字符串不能用\换行
"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
"no-native-reassign": 2,//不能重写native对象
"no-negated-in-lhs": 2,//in 操作符的左边不能有!
"no-nested-ternary": 0,//禁止使用嵌套的三目运算
"no-new": 1,//禁止在使用new构造一个实例后不赋值
"no-new-func": 1,//禁止使用new Function
"no-new-object": 2,//禁止使用new Object()
"no-new-require": 2,//禁止使用new require
"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
"no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
"no-octal": 2,//禁止使用八进制数字
"no-octal-escape": 2,//禁止使用八进制转义序列
"no-param-reassign": 2,//禁止给参数重新赋值
"no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
"no-plusplus": 0,//禁止使用++，--
"no-process-env": 0,//禁止使用process.env
"no-process-exit": 0,//禁止使用process.exit()
"no-proto": 2,//禁止使用__proto__属性
"no-redeclare": 2,//禁止重复声明变量
"no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
"no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
"no-return-assign": 1,//return 语句中不能有赋值表达式
"no-script-url": 0,//禁止使用javascript:void(0)
"no-self-compare": 2,//不能比较自身
"no-sequences": 0,//禁止使用逗号运算符
"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
"no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
"no-sync": 0,//nodejs 禁止同步方法
"no-ternary": 0,//禁止使用三目运算符
"no-trailing-spaces": 1,//一行结束后面不要有空格
"no-this-before-super": 0,//在调用super()之前不能使用this或super
"no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
"no-undef": 1,//不能有未定义的变量
"no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
"no-undefined": 2,//不能使用undefined
"no-unexpected-multiline": 2,//避免多行表达式
"no-underscore-dangle": 1,//标识符不能以_开头或结尾
"no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
"no-unreachable": 2,//不能有无法执行的代码
"no-unused-expressions": 2,//禁止无用的表达式
"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
"no-use-before-define": 2,//未定义前不能使用
"no-useless-call": 2,//禁止不必要的call和apply
"no-void": 2,//禁用void操作符
"no-var": 0,//禁用var，用let和const代替
"no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
"no-with": 2,//禁用with

"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
"arrow-parens": 0,//箭头函数用小括号括起来
"arrow-spacing": 0,//=>的前/后括号
"accessor-pairs": 0,//在对象中使用getter/setter
"block-scoped-var": 0,//块语句中使用var
"brace-style": [1, "1tbs"],//大括号风格
"callback-return": 1,//避免多次调用回调什么的
"camelcase": 2,//强制驼峰法命名
"comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
"comma-spacing": 0,//逗号前后的空格
"comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
"complexity": [0, 11],//循环复杂度
"computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
"consistent-return": 0,//return 后面是否允许省略
"consistent-this": [2, "that"],//this别名
"constructor-super": 0,//非派生类不能调用super，派生类必须调用super
"curly": [2, "all"],//必须使用 if(){} 中的{}
"default-case": 2,//switch语句最后必须有default
"dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
"dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
"eol-last": 0,//文件以单一的换行符结束
"eqeqeq": 2,//必须使用全等
"func-names": 0,//函数表达式必须有名字
"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
"generator-star-spacing": 0,//生成器函数*的前后空格
"guard-for-in": 0,//for in循环要用if语句过滤
"handle-callback-err": 0,//nodejs 处理错误
"id-length": 0,//变量名长度
"indent": [2, 4],//缩进风格
"init-declarations": 0,//声明时必须赋初值
"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
"lines-around-comment": 0,//行前/行后备注
"max-depth": [0, 4],//嵌套块深度
"max-len": [0, 80, 4],//字符串最大长度
"max-nested-callbacks": [0, 2],//回调嵌套深度
"max-params": [0, 3],//函数最多只能有3个参数
"max-statements": [0, 10],//函数内最多有几个声明
"new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
"new-parens": 2,//new时必须加小括号
"newline-after-var": 2,//变量声明后是否需要空一行
"object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
"object-shorthand": 0,//强制对象字面量缩写语法
"one-var": 1,//连续声明
"operator-assignment": [0, "always"],//赋值运算符 += -=什么的
"operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
"padded-blocks": 0,//块语句内行首行尾是否要空行
"prefer-const": 0,//首选const
"prefer-spread": 0,//首选展开运算
"prefer-reflect": 0,//首选Reflect的方法
"quotes": [1, "single"],//引号类型 `` "" ''
"quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
"radix": 2,//parseInt必须指定第二个参数
"id-match": 0,//命名检测
"require-yield": 0,//生成器函数必须有yield
"semi": [2, "always"],//语句强制分号结尾
"semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
"sort-vars": 0,//变量声明时排序
"space-after-keywords": [0, "always"],//关键字后面是否要空一格
"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
"space-in-parens": [0, "never"],//小括号里面要不要有空格
"space-infix-ops": 0,//中缀操作符周围要不要有空格
"space-return-throw-case": 2,//return throw case后面要不要加空格
"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
"spaced-comment": 0,//注释风格要不要有空格什么的
"strict": 2,//使用严格模式
"use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
"valid-jsdoc": 0,//jsdoc规则
"valid-typeof": 2,//必须使用合法的typeof的值
"vars-on-top": 2,//var必须放在作用域顶部
"wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
"wrap-regex": 0,//正则表达式字面量用小括号包起来
"yoda": [2, "never"]//禁止尤达条件
```

## Vuex 使用说明

```javascript
    为避免所有的vuex滥用，所有展示型的组件都通过props来获取父组件传递来的数据

    注意，所有展示型的如 erek-resume-tips  等通用组件，只有一个作用，就是展示，父组件给我什么，我就展示什么。

    如果子组件需要触发什么函数，需通过 $emit 回传给父组件，一路回传到layout主页面中，在主页面再触发函数，只有layout与vuex状态机打交道

```

## 配置说明

### `菜单栏` 配置

- 配置文件在 `config / menu.js`
- 根据 isSubmenu 判断是否有二级菜单栏
- 根据 hasSubmenu 判断是否有三级菜单栏
- 引入菜单栏配置在 Manage / Router.vue 组件中

例子

```javascript
  // 一级菜单栏
  {
    text: '', // 文本
    icon: 'ios-color-palette-outline', // 图标，不需要则为空
    isSubmenu: false, // 是否有子菜单
    name: '1',
    _to: '' // 跳转的链接
  },
  // 二级菜单栏
  {
    text: '',
    icon: 'ios-contact-outline',
    isSubmenu: true, // 是否有子菜单
    name: '2',
    list: [
      {
        text: '', // 子菜单栏文本
        hasSubmenu: false, // 是否有子菜单
        name: '2-1',
        _to: '' // 跳转的链接
      }
    ]
  },
  // 三级菜单栏
  {
    text: '',
    icon: 'ios-swap',
    isSubmenu: true,
    name: '3',
    list: [
      {
        text: '', // 二级菜单栏文本
        hasSubmenu: false, // 是否有子菜单
        name: '3-1',
        _to: '' // 跳转的链接
      },
      {
        text: '',
        hasSubmenu: true,
        name: '3-2',
        submenu: [
          {
            text: '热门模板', // 三级菜单栏文本
            name: '3-2-1',
            _to: '' // 跳转的链接
          }
        ]
      }
    ]
  }
```

### `面包屑` 配置

- 配置文件在 `config / breadItem.js`
- 在 Manage / Router.vue 中监听路由的改变
- 根据路由的 path 和配置文件匹配，从而实现面包屑的切换
- 每新增一个 menu 菜单栏，需要在面包屑配置中，新增一个路由对应的 breadItem

```javascript
  const BreadItem = {
    ...
    '/erek-manage/your-add-xxxx': 'xxx管理-xx-xxx',
    ...
  }
```

---

### 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

### 相关链接

erek-resume: https://github.com/PDKSophia/erek-resume

erek-manage: https://github.com/PDKSophia/erek-manage

git 团队协作: https://github.com/PDKSophia/blog.io/blob/master/%E6%80%A7%E8%83%BD%E5%8F%8A%E5%8D%8F%E4%BD%9C%E7%AF%87-Git%E7%9A%84%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C.md
