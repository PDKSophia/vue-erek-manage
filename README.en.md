[简体中文](./README.md) | English

# Vue-Erek-Manage

![](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)
![](https://img.shields.io/badge/echarts-4.1.0-yellow.svg)
![](https://img.shields.io/badge/iView-3.1.3-green.svg)
![](https://img.shields.io/badge/axios-0.18.0-red.svg)

## Introduce

`Vue-Erek-Manage` is a backstage management system based on `Vue 2.0` and `iView UI`，It draws on `pro-ant-design` framework. It applies to background management for small projects

## Characteristic

- Configure `Menu bar` and `Breadcrumbs directly`
- Imitation `pro-ant-design` framework, provide `Echarts icon` and `Table form list` and other pages to learn from
- Use `npm + webpack + babel` workflow , and support `ES6`

## Technology

- vue-cli
- vuex
- axios
- vue-router
- scss
- iView
- echarts
- mock.js
- ...

## Target function

- [ ] Dashboard
- [ ] List Page
- [ ] Error Page
- [ ] Work Management
- [ ] Person Page
- [ ] Theme Setting

## Echarts

- [ ] Line Echarts
- [ ] Data Card
- [ ] Pie Echarts
- [ ] Radar Echarts

## Project Environment

```javascript
    1 . Node.js is v10.6.0

    2 . Vue-cli is v3.0.0

    3 . Other dependencies please move package.json

```

## Use

```javascript
  1. git clone https://github.com/PDKSophia/vue-erek-manage

  2. cd vue-erek-manage

  3. npm install

  4. npm run serve
```

```
·
├── package.json
│ 
├── public
│ 
├── src
│   ├── assets
│   │
│   ├── components
│   │    ├─BadgeComponents
│   │    ├─DividerComponents
│   │    ├─EchartsComponents
│   │    │    ├─Line
│   │    │    ├─Pie
│   │    │    ├─Radar
│   │    │    └─ ...
│   │    ├─FormComponents
│   │    │    ├─LoginForm
│   │    │    └─ ...
│   │    ├─PageComponents
│   │    │    ├─Index
│   │    │    └─ ...
│   │    ├─ScaleCardComponents
│   │    ├─StarCardComponents
│   │    └─ ...
│   │
│   ├── config
│   │    ├─app.js
│   │    ├─echarts
│   │    │    ├─line.config.js
│   │    │    ├─pie.config.js
│   │    │    ├─radar.config.js
│   │    │    └─ ...
│   │    ├─breadItem.js
│   │    ├─menu.js
│   │    ├─tab.js
│   │    ├─theme.js
│   │    └─ ...
│   │
│   ├── mock
│   │    ├─app.js
│   │    ├─data.js
│   │    ├─index.js
│   │    ├─list.js
│   │    └─ ...
│   │
│   ├── pages
│   │    ├─Canvas
│   │    ├─Layouts
│   │    ├─List
│   │    │   ├─Card
│   │    │   ├─Standard
│   │    │   ├─Table
│   │    │   └─ ...
│   │    └─ ...
│   │
│   ├── router
│   │
│   ├── service
│   │    ├─api-app.js
│   │    ├─api-list.js
│   │    ├─index.js
│   │    ├─request.js
│   │    └─ ...
│   │
│   ├── store
│   │
│   ├── utils
│   │    ├─tool.js
│   │    ├─utils.js
│   │    ├─vue-token.js
│   │    └─ ...
│   │
│   ├── view
│   │    ├─Login
│   │    ├─Manage
│   │    │    ├─VueErekException
│   │    │    ├─VueErekIndex
│   │    │    ├─VueErekList
│   │    │    ├─VueErekProfile
│   │    │    ├─VueErekTool
│   │    │    ├─VueErekUser
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

## Wiki Docs

- [Vue-Erek-Manage](https://github.com/PDKSophia/vue-erek-manage/wiki/Vue-Erek-Manage-%E6%96%87%E6%A1%A3)
  - [theme、menu、breadItem ConfigPage](https://github.com/PDKSophia/vue-erek-manage/wiki/%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3)
  - [table、standlist ListPage](https://github.com/PDKSophia/vue-erek-manage/wiki/%E5%88%97%E8%A1%A8%E9%A1%B5)
  - [badge Page](https://github.com/PDKSophia/vue-erek-manage/wiki/%E5%BE%BD%E7%AB%A0)

## Display Picture

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-0.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-1.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-2.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-3.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-4.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-5.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-6.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-exception-403.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-exception-404.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-exception-500.png'>

## [Please click here for other pages](https://github.com/PDKSophia/vue-erek-manage/wiki)

## Related links

v1.1 YunResume: http://yun.pengdaokuan.cn/YunResume

v2.0 ErekResume: http://yun.pengdaokuan.cn/erek-resume

blog: https://github.com/PDKSophia/blog.io

juejin: https://juejin.im/user/594ca8a35188250d892f4139

erek-editor: https://github.com/PDKSophia/erek-editror

pro-ant-design: https://pro.ant.design/index-cn

---

Copyright © 2018 by PDK

If you have any questions, please contact me 1063137960@qq.com
