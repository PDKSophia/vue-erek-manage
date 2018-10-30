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
    icon: 'ios-swap',
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
      },
      {
        text: '工作留言',
        hasSubmenu: false, // 是否有子菜单
        name: '3-4',
        _to: '/erek-manage/erek-tool-words' // 跳转的链接
      }
    ]
  },
]

export default Menu