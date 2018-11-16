const Menu = [
  // 一级菜单栏
  {
    text: '仪表盘',
    icon: 'ios-color-palette-outline',
    isSubmenu: false, // 是否有子菜单
    name: '1',
    _to: '/erek-manage/erek-home' // 跳转的链接
  },
  // 三级菜单栏
  {
    text: '安全管理',
    icon: 'ios-medkit-outline',
    isSubmenu: true,
    name: '2',
    list: [
      {
        text: '系统安全',
        hasSubmenu: false, // 是否有子菜单
        name: '2-1',
        _to: '/erek-manage/erek-safe-system' // 跳转的链接
      },
      {
        text: '管理员操作',
        hasSubmenu: true,
        name: '2-2',
        submenu: [
          {
            text: '角色设定',
            name: '2-2-1',
            _to: '/erek-manage/erek-safe-admin-role'
          },
          {
            text: '密码修改',
            name: '2-2-2',
            _to: '/erek-manage/erek-safe-admin-password'
          }
        ]
      }
    ]
  },
  // 二级菜单栏
  {
    text: '工具栏',
    icon: 'ios-contact-outline',
    isSubmenu: true,
    name: '3',
    list: [
      {
        text: '系统通知',
        hasSubmenu: false, // 是否有子菜单
        name: '3-1',
        _to: '/erek-manage/erek-tool-message' // 跳转的链接
      },
      {
        text: '宣传栏',
        hasSubmenu: false, // 是否有子菜单
        name: '3-2',
        _to: '/erek-manage/erek-tool-advertise' // 跳转的链接
      },
      {
        text: '公告栏',
        hasSubmenu: false, // 是否有子菜单
        name: '3-3',
        _to: '/erek-manage/erek-tool-commonality' // 跳转的链接
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
        text: '查询表格',
        hasSubmenu: false, // 是否有子菜单
        name: '4-1',
        _to: '/erek-manage/erek-list-table' // 跳转的链接
      },
      {
        text: '标准列表',
        hasSubmenu: false, // 是否有子菜单
        name: '4-2',
        _to: '/erek-manage/erek-list-standard' // 跳转的链接
      },
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
        hasSubmenu: false, // 是否有子菜单
        name: '5-1',
        _to: '/erek-manage/erek-exception/403' // 跳转的链接
      },
      {
        text: '404',
        hasSubmenu: false, // 是否有子菜单
        name: '5-2',
        _to: '/erek-manage/erek-exception/404' // 跳转的链接
      },
      {
        text: '500',
        hasSubmenu: false, // 是否有子菜单
        name: '5-3',
        _to: '/erek-manage/erek-exception/500' // 跳转的链接
      },
    ]
  },
  {
    text: '个人页',
    icon: 'md-grid',
    isSubmenu: true,
    name: '6',
    list: [
      {
        text: '个人中心',
        hasSubmenu: false, // 是否有子菜单
        name: '6-1',
        _to: '/erek-manage/erek-user/information' // 跳转的链接
      },
      {
        text: '个人设置',
        hasSubmenu: false, // 是否有子菜单
        name: '6-2',
        _to: '/erek-manage/erek-user/setting' // 跳转的链接
      },
    ]
  }
]

export default Menu