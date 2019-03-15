简体中文 | [English](./README.en.md)

<div align='center'>

  <img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/logo-1.png' width=340 height=220>

![](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)
![](https://img.shields.io/badge/echarts-4.1.0-yellow.svg)
![](https://img.shields.io/badge/iView-3.1.3-green.svg)
![](https://img.shields.io/badge/axios-0.18.0-red.svg)

</div>

# Vue-Erek-Manage

## 介绍

`Vue-Erek-Manage` 是一款基于 `Vue 2.5` + `iView UI` 的后台管理, 借鉴模仿 `pro-ant-design`的设计，👉 适用于小型项目后台管理，个人维护项目

## 特性

- 直接配置 `Menu菜单栏` 和 `BreadItem面包屑`
- 仿`pro-ant-design`框架, 提供`Echarts图标` `Table表格列表`等页面借鉴
- 使用 `npm + webpack + babel` 的工作流，支持 `ES6`

## 技术栈

- vue-cli
- vuex
- axios
- vue-router
- scss
- iView
- echarts
- mock.js
- ...

## 实现目标

- [ ] 仪表盘
- [ ] 列表页
- [ ] 详情页
- [ ] 错误页
- [ ] 个人页
- [ ] 主题设置

## 图表

- [ ] 折现表
- [ ] 数据卡片
- [ ] 饼图
- [ ] 雷达图
- [ ] ...(QAQ 后期还在做)

## 项目环境

```javascript
    1 . Node.js is v10.6.0

    2 . Vue-cli is v3.0.0

    3 . 其他依赖请看 package.json

```

## 使用

```javascript
  1. git clone https://github.com/PDKSophia/vue-erek-manage

  2. cd vue-erek-manage

  3. npm install

  4. npm run serve
```

## Wiki 使用文档

> 使用文档正在写中，请放心，尽可能简单，让大哥们容易上手，有句话说的好: **重构是每天的事情，不要等代码量上来了，并且笨重了再进行重构**，请大哥们不要离开我，我会加快进度，同时如果你觉得我 OK 的话，给我点个星星 ✨ 吧，算是对我的一个鼓励，爱你们 ❤️

## 文件架构

```
·
├── package.json
│ 
├── public                              打包的数据
│ 
├── src
│   ├── assets                          图片等资源文件
│   │
│   ├── components
│   │    ├─BadgeComponents              封装的Badge组件，实例: 个人中心
│   │    ├─DividerComponents            封装的Divider组件
│   │    ├─EchartsCardComponents        封装的卡片数据组件
│   │    ├─EchartsComponents
│   │    │    ├─Line                    封装的折线图组件
│   │    │    ├─Pie                     封装的饼图组件
│   │    │    ├─Radar                   封装的雷达图组件
│   │    │    └─ ...
│   │    ├─FloatButtonComponents        封装的圆圈按钮组件
│   │    ├─FormComponents
│   │    │    ├─LoginForm               封装的登陆表单组件
│   │    │    └─ ...
│   │    ├─HigherOrderComponents
│   │    │    ├─HOC-EchartCard          封装的数据卡片中间层组件
│   │    │    ├─HOC-EchartLine          封装的折线图中间层组件
│   │    │    ├─HOC-EchartPie           封装的饼图中间层组件
│   │    │    ├─HOC-EchartRadar         封装的雷达图中间层组件
│   │    │    └─ ...
│   │    ├─PageComponents
│   │    │    ├─Index                   封装的部分页面组件
│   │    │    └─ ...
│   │    ├─ProfileTableComponents
│   │    │    ├─BaseTable               封装基本详情页中的Table组件
│   │    │    ├─AdvanceTable            封装高级详情页中的Table组件
│   │    │    └─ ...
│   │    ├─ScaleCardComponents          封装的带有放大的卡片组件
│   │    ├─StarCardComponents           封装的带有星星的卡片组件
│   │    └─ ...
│   │
│   ├── config
│   │    ├─echarts                      图表的配置
│   │    │    ├─line.config.js
│   │    │    ├─pie.config.js
│   │    │    ├─radar.config.js
│   │    │    └─ ...
│   │    ├─app.js                       应用配置
│   │    ├─breadItem.js                 面包屑配置
│   │    ├─global.js                    全部的部分配置
│   │    ├─menu.js                      菜单栏配置
│   │    └─ ...
│   │
│   ├── mock                            mock模拟请求
│   │    ├─app.js
│   │    ├─card.js
│   │    ├─data.js
│   │    ├─echarts.js
│   │    ├─list.js
│   │    ├─user.js
│   │    └─ ...
│   │
│   ├── pages
│   │    ├─Canvas                       Canvas动画背景
│   │    ├─Layouts                      Layouts布局
│   │    ├─List                         列表页
│   │    │   ├─Avatar
│   │    │   ├─Card
│   │    │   ├─Standard
│   │    │   ├─Table
│   │    │   └─ ...
│   │    └─ ...
│   │
│   ├── router                          路由
│   │
│   ├── service                         与服务器相关文件
│   │    ├─api-app.js
│   │    ├─api-echarts.js
│   │    ├─api-list.js
│   │    ├─api-user.js
│   │    ├─index.js
│   │    ├─request.js
│   │    └─ ...
│   │
│   ├── store                           vuex模块化
│   │
│   ├── utils
│   │    ├─tool.js                      全局函数文件，比如 加载框，提示框等
│   │    ├─utils.js                     其他函数处理文件
│   │    ├─vue-token.js
│   │    └─ ...
│   │
│   ├── view
│   │    ├─Login                        登陆页
│   │    ├─Manage
│   │    │    ├─VueErekException        错误页
│   │    │    ├─VueErekIndex            仪表盘
│   │    │    ├─VueErekList             列表页
│   │    │    ├─VueErekProfile          详情页
│   │    │    ├─VueErekTool             工具页
│   │    │    ├─VueErekUser             个人页
│   │    │    ├─Router
│   │    │    └─ ...
│   │    └─ ...
│   │
│   └─
│ 
├── main.js
│ 
├── App.vue
│ 
└─
```

## 页面展示

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-1.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-2.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-3.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-4.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-5.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-6.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-7.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-15.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-8.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-9.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-10.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-12.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-13.png'>

---

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/ui-14.png'>

---

## 吐槽一哈

在做图表、数据卡片的时候，在思考，如何让用户使用起来更加方便简介，想在 `Echarts组件` 和用户使用的 `xx组件` 之间做一层封装，用户只需要传递数据即可，至于其他的默认配置就在中间一层配置就好，这时候，就想到 `React` 大法的好处了，想到 `高阶组件` 的好处了，并不是说 Vue 不能用高阶组件，而是我不会在 Vue 中写简单的高阶组件，心累

---

## 其他链接

blog: https://github.com/PDKSophia/blog.io

juejin: https://juejin.im/user/594ca8a35188250d892f4139

pro-ant-design: https://pro.ant.design/index-cn

---

Copyright © 2018 by PDK

If you have any questions, please contact me 1063137960@qq.com
