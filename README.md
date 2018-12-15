简体中文 | [English](./README.en.md)

<div align='center'>

  <img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/logo.png' width=280 height=220>

![](https://img.shields.io/badge/vue-2.5.2-blue.svg)
![](https://img.shields.io/badge/license-MIT-orange.svg)
![](https://img.shields.io/badge/echarts-4.1.0-yellow.svg)
![](https://img.shields.io/badge/iView-3.1.3-green.svg)
![](https://img.shields.io/badge/axios-0.18.0-red.svg)

</div>

# Vue-Erek-Manage

## 介绍
`Vue-Erek-Manage` 是一款基于 `Vue 2.5` + `iView UI` 的后台管理, 借鉴模仿 `pro-ant-design`的设计，适用于小型项目后台管理，个人维护项目

## 特性

- 直接配置 `Menu菜单栏` 和 `BreadItem面包屑`
- 仿`pro-ant-design`框架, 提供`Echarts图标` `Table表格列表`等页面借鉴
- 使用 `npm + webpack + babel` 的工作流，支持 `ES6`

<!-- ## Display Link -->
<!-- Link: http://yun.pengdaokuan.cn/erek-manage -->

## 技术栈
+ vue-cli
+ vuex
+ axios
+ vue-router
+ scss
+ iView
+ echarts
+ mock.js
+ ...

## 实现目标
- [ ] 仪表盘
- [ ] 列表页
- [ ] 详情页
- [ ] 错误页
- [ ] 工具页
- [ ] 个人页
- [ ] 主题设置

## 图表
- [ ] 折现表
- [ ] 数据卡片
- [ ] 饼图
- [ ] 雷达图
- [ ] 柱图

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
│   │    ├─EchartsComponents                   
│   │    │    ├─Line                    封装的折线图组件
│   │    │    ├─Pie                     封装的饼图组件
│   │    │    ├─Radar                   封装的雷达图组件
│   │    │    └─ ... 
│   │    ├─FormComponents                   
│   │    │    ├─LoginForm               封装的登陆表单组件
│   │    │    └─ ... 
│   │    ├─PageComponents                   
│   │    │    ├─Index                   封装的部分页面组件
│   │    │    └─ ...    
│   │    ├─ScaleCardComponents          封装的带有放大的卡片组件      
│   │    ├─StarCardComponents           封装的带有星星的卡片组件
│   │    └─ ... 
│   │
│   ├── config
│   │    ├─app.js                       应用配置   
│   │    ├─echarts                      图表的配置   
│   │    │    ├─line.config.js             
│   │    │    ├─pie.config.js             
│   │    │    ├─radar.config.js             
│   │    │    └─ ...    
│   │    ├─breadItem.js                 面包屑配置   
│   │    ├─menu.js                      菜单栏配置   
│   │    ├─tab.js                       放大卡片的配置
│   │    ├─theme.js                     主题配置   
│   │    └─ ...    
│   │ 
│   ├── mock
│   │    ├─index.js                     mock模拟请求
│   │    ├─data.js                  
│   │    └─ ...    
│   │ 
│   ├── pages                    
│   │    ├─Canvas                       Canvas动画背景
│   │    ├─Layouts                      Layouts布局
│   │    ├─List                         列表页
│   │    └─ ... 
│   │
│   ├── router                          路由
│   │
│   ├── service                         与服务器相关文件
│   │    ├─api                      
│   │    ├─request                  
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


## Wiki 使用文档
* [Vue-Erek-Manage](https://github.com/PDKSophia/vue-erek-manage/wiki/Vue-Erek-Manage-%E6%96%87%E6%A1%A3)
    * [theme、menu、breadItem 配置](https://github.com/PDKSophia/vue-erek-manage/wiki/%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3)
    * [table、standlist 列表页](https://github.com/PDKSophia/vue-erek-manage/wiki/%E5%88%97%E8%A1%A8%E9%A1%B5)
    * [badge 徽章](https://github.com/PDKSophia/vue-erek-manage/wiki/%E5%BE%BD%E7%AB%A0)

## 页面展示

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-1.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-index.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-table.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-stand.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-403.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-404.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-500.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-user-1.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-user-2.png'>

<img src='https://github.com/PDKSophia/erek-resume-manage/raw/master/image/vue-erek-user-3.png'>

## 其他链接

v1.1 YunResume: http://yun.pengdaokuan.cn/YunResume

v2.0 ErekResume: http://yun.pengdaokuan.cn/erek-resume

blog: https://github.com/PDKSophia/blog.io

juejin: https://juejin.im/user/594ca8a35188250d892f4139

erek-editor: https://github.com/PDKSophia/erek-editror

pro-ant-design: https://pro.ant.design/index-cn

-----

Copyright © 2018 by PDK

If you have any questions, please contact me 1063137960@qq.com
