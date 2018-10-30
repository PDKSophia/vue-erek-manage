## 开发人员文档
-----

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
- 每新增一个 menu 菜单栏，需要在面包屑配置中，新增一个路由对应的breadItem

```javascript
  const BreadItem = {
    ...
    '/erek-manage/your-add-xxxx': 'xxx管理-xx-xxx',
    ...
  }
```

-------

### 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

### 相关链接
erek-resume: https://github.com/PDKSophia/erek-resume

erek-manage: https://github.com/PDKSophia/erek-manage

git团队协作: https://github.com/PDKSophia/blog.io/blob/master/%E6%80%A7%E8%83%BD%E5%8F%8A%E5%8D%8F%E4%BD%9C%E7%AF%87-Git%E7%9A%84%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C.md
