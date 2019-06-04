/**
 * 菜单栏配置
 *
 * @summary
 * @author PDK
 *
 * Created at     : 2018-10-30
 * Last modified  : 2019-05-25
 */

/**
 * @菜单栏配置
 */
const Menu = [
  // 一级菜单栏
  {
    text: '仪表盘',
    icon: 'ios-color-palette-outline',
    isSubmenu: false,
    name: '1',
    _to: '/erek-manage/erek-home'
  },
  // // 三级菜单栏
  // {
  //   text: '安全管理',
  //   icon: 'ios-medkit-outline',
  //   isSubmenu: true,
  //   name: '2',
  //   list: [
  //     {
  //       text: '系统安全',
  //       hasSubmenu: false, // 是否有子菜单
  //       name: '2-1',
  //       _to: '/erek-manage/erek-safe-system'
  //     },
  //     {
  //       text: '管理员操作',
  //       hasSubmenu: true,
  //       name: '2-2',
  //       submenu: [
  //         {
  //           text: '角色设定',
  //           name: '2-2-1',
  //           _to: '/erek-manage/erek-safe-admin-role'
  //         },
  //         {
  //           text: '密码修改',
  //           name: '2-2-2',
  //           _to: '/erek-manage/erek-safe-admin-password'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // 二级菜单栏
  {
    text: '详情页',
    icon: 'ios-list-box-outline',
    isSubmenu: true,
    name: '3',
    list: [
      {
        text: '基础详情页',
        hasSubmenu: false,
        name: '3-1',
        _to: '/erek-manage/erek-profile-basic'
      },
      {
        text: '高级详情页',
        hasSubmenu: false,
        name: '3-2',
        _to: '/erek-manage/erek-profile-advance'
      }
    ]
  },
  {
    text: '列表页',
    icon: 'md-grid',
    isSubmenu: true,
    name: '4',
    list: [
      {
        text: '表格',
        hasSubmenu: false,
        name: '4-1',
        _to: '/erek-manage/erek-list-table'
      },
      {
        text: '列表',
        hasSubmenu: false,
        name: '4-2',
        _to: '/erek-manage/erek-list-standard'
      },
      {
        text: '卡片',
        hasSubmenu: false,
        name: '4-3',
        _to: '/erek-manage/erek-list-card'
      },
      {
        text: '头像',
        hasSubmenu: false,
        name: '4-4',
        _to: '/erek-manage/erek-list-avatar'
      }
    ]
  },
  {
    text: '错误页',
    icon: 'md-warning',
    isSubmenu: true,
    name: '5',
    list: [
      {
        text: '403',
        hasSubmenu: false,
        name: '5-1',
        _to: '/erek-manage/erek-exception/403'
      },
      {
        text: '404',
        hasSubmenu: false,
        name: '5-2',
        _to: '/erek-manage/erek-exception/404'
      },
      {
        text: '500',
        hasSubmenu: false,
        name: '5-3',
        _to: '/erek-manage/erek-exception/500'
      }
    ]
  },
  {
    text: '个人页',
    icon: 'md-person',
    isSubmenu: true,
    name: '6',
    list: [
      {
        text: '个人中心',
        hasSubmenu: false,
        name: '6-1',
        _to: '/erek-manage/erek-user/information'
      },
      {
        text: '个人设置',
        hasSubmenu: false,
        name: '6-2',
        _to: '/erek-manage/erek-user/setting'
      }
    ]
  }
]

export default Menu
