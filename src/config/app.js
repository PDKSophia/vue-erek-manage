/**
 * @应用配置
 */
export const app = {
  APP_NAME: 'Vue-Erek-Manage',
  APP_AUTHOR: '彭道宽',
  APP_LOGO: require('../assets/logo.png'),
  APP_SUMMARY: '一套基于 iView UI 的 Vue.js 后台管理系统',
  APP_DESC:
    'Vue-Erek-Manage 是一款基于 Vue 2.5 + iView UI 的后台管理, 借鉴模仿 pro-ant-design的设计，适用于小型项目后台管理，个人维护项目',
  APP_MENU: [
    {
      TEXT: '文档',
      STATUS: 'erek-docs'
    },
    {
      TEXT: 'Github',
      STATUS: 'erek-origincode'
    },
    {
      TEXT: '登陆',
      STATUS: 'erek-login'
    }
  ]
};

/**
 * @主题配置
 */
export const theme = {
  APP_THEME: {
    LAYOUT_HEADER: {
      BG_HEADER_COLOR: '#3f51b5', // layout header 背景色
      FONT_HEADER_COLOR: 'white', // layout header 颜色
      BG_LOGO_COLOR: '#3f51b5', // logo 处的背景色
      HEADER_HEADER: '70px' // layout header 高度
    },
    LAYOUT_MENU: {
      BG_MENU_COLOR: '#ffffff', // layout menu 背景色
      FONT_MENU_COLOR: 'rgba(0,0,0,0.8)' // layout menu 颜色
    }
  }
};
