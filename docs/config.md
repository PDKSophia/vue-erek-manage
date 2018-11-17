### 关于配置
所有 `vue-erek-manage` 相关的配置均在文件夹 src / config 中，可能配置方面写的不怎么好，如果有bug问题，请提issue，或者加入我，一起共同维护这个项目。

#### 主题颜色
配置文件在 ` src / config / theme.js `中，找到对应文件，进行修改
```javascript
  layoutHeader: {
    bgVueErek: '#27292c', // layout header 背景色
    colorVueErek: 'white', // layout header 颜色
    bgLogoVueErek: '#5b6270', // logo 处的背景色
    height: '62px', // layout header 高度
  },

  layoutMenu: {
    bgVueErek: '#313335', // layout menu 背景色
    colorVueErek: '#f1f1f1', // layout menu 颜色
  }
```
__注意__ ：如果修改上边 `layoutMenu` 的配置，修改背景色之后，需要到 `erekPages / Layouts / Sider.vue` 中修改下边字段
```css
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #242427 !important; // 对应上边 layoutMenu.baVueErek 的值
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    background: #242427 !important; // 对应上边 layoutMenu.baVueErek 的值
    width: 1px !important;
  }
```

#### Menu 菜单栏
配置文件在 ` src / config / menu.js `中，找到对应文件，进行修改

- 目前支持到三级菜单栏的配置

- 菜单栏中的 `name` 字段不能相同

- `_to`字段的跳转链接需对应到 `router` 路由

```javascript
  const Menu = {
    // 一级菜单栏
    {
      text: '', // 内容
      icon: '', // 图标
      isSubmenu: false, // 是否有子菜单
      name: '1',
      _to: '' // 跳转的链接
    },
    
    // 二级菜单栏
    {
      text: '', // 内容
      icon: '', // 图标
      isSubmenu: true, // 是否有子菜单
      name: '2',
      list: [
        {
          text: '',
          hasSubmenu: false, 
          name: '2-1',
          _to: ''
        },
        {
          text: '',
          hasSubmenu: false, 
          name: '2-2',
          _to: ''
        },
      ]
    },

    // 三级菜单栏
    {
      text: '',
      icon: '',
      isSubmenu: true,
      name: '3',
      list: [
        {
          text: '',
          hasSubmenu: true,
          name: '3-1',
          submenu: [
            {
              text: '',
              name: '3-1-1',
              _to: ''
            },
            {
              text: '',
              name: '3-1-2',
              _to: ''
            }
          ]
        }
      ]
    },
  }
```

#### BreadItem 面包屑
配置文件在 ` src / config / breadItem.js `中，找到对应文件，进行修改，需要路由与menu中的文字一一对应，<storng>如果一开始的面包屑不是 "仪表盘"， 需到 src / erekPages / Layouts / Sider.vue 中修改 breadList : [' 仪表盘 '] </strong>

```javascript
  // 菜单栏配置
  const Menu = {
    {
      text: '仪表盘', 
      icon: '', 
      isSubmenu: false, 
      name: '1',
      _to: '/erek-manage/erek-home' 
    },
  }

  // 面包屑配置
  const BreadItem = {
    '/erek-manage/erek-home': '仪表盘',
  }

```