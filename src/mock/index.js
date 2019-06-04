/**
 * 所有Mock数据设计
 *
 * @summary Global Mock
 * @author PDK
 *
 * Created at     : 2019-01-11
 * Last modified  : 2019-05-26
 */

const Mock = require('mockjs')

// 卡片模块
/**
 * @desc 获取卡片数据
 * @return {*}
 */
Mock.mock('/api/echarts/card/get-all', () => {
  return {
    code: 1,
    msg: '获取所有首页tab的卡片数据',
    data: [
      {
        text: '使用量',
        value: 131
      },
      {
        text: '下载量',
        value: 382
      },
      {
        text: '围观量',
        value: 89
      },
      {
        text: '推广量',
        value: 225
      }
    ]
  }
})

// 图表模块
/**
 * @desc 获取平台访问量
 * @return {*}
 */
Mock.mock('/api/echarts/visit/get-all', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      timeRange: ['05-24', '05-25', '05-26', '05-27', '05-28', '05-29', '05-30'],
      countRange: [0, 1000],
      text: '平台日访问量',
      list: [
        {
          text: '平台日访问量',
          data: [452, 732, 675, 724, 332, 642, 561]
        },
        {
          text: '日注册人数',
          data: [525, 852, 425, 579, 525, 412, 332]
        }
      ]
    }
  }
})

/**
 * @desc 获取平台来源数据
 * @return {*}
 */
Mock.mock('/api/echarts/origin/get-all', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '联盟广告' },
      { value: 234, name: '垃圾邮箱' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  }
})
/**
 * @desc 获取实际开销与预算开销
 * @return {*}
 */
Mock.mock('/api/echarts/expense/get-all', () => {
  return {
    code: 1,
    msg: '获取预算开销和实际开销成功',
    data: {
      alloccate: {
        name: '预算开销',
        data: [
          { value: 4000, name: '研发部' },
          { value: 3000, name: '编辑部' },
          { value: 3000, name: '运营部' },
          { value: 2500, name: '人力资源部' },
          { value: 2500, name: '视频部' }
        ]
      },
      actual: {
        name: '实际开销',
        data: [
          { value: 8821, name: '研发部' },
          { value: 6761, name: '编辑部' },
          { value: 8865, name: '运营部' },
          { value: 5865, name: '人力资源部' },
          { value: 7612, name: '视频部' }
        ]
      }
    }
  }
})

// 表格列表模块
/**
 * @desc 获取所有表格数据列表
 * @return {*}
 */
Mock.mock('/api/list/get-all?pageNum=1&pageSize=10', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 3,
      list: [
        {
          id: 1,
          username: '彭道宽',
          staffID: 1982,
          content:
            '土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '研发部',
          type: '负责人',
          status: 'online',
          phone: '189****8869',
          time: 1539670042000
        },
        {
          id: 2,
          username: '懒羊羊',
          staffID: 2938,
          content: '那是一种内在的东西， 他们到达不了，也无法触及的',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '技术部',
          type: '员工',
          status: 'exit',
          phone: '182****8321',
          time: 1539630042000
        },
        {
          id: 3,
          username: '沸羊羊',
          staffID: 1920,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '技术部',
          type: '部长',
          status: 'online',
          phone: '178****8312',
          time: 1539630042000
        },
        {
          id: 4,
          username: '喜洋洋',
          staffID: 1231,
          content: '那是一种内在的东西， 他们到达不了，也无法触及的',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '研发部',
          type: '员工',
          status: 'online',
          phone: '182****8321',
          time: 1539630042000
        },
        {
          id: 5,
          username: '美羊羊',
          staffID: 2716,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '运营部',
          type: '员工',
          status: 'exit',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 6,
          username: '灰太狼',
          staffID: 4271,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '运营部',
          type: '部长',
          status: 'exit',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 7,
          username: '红太狼',
          staffID: 5212,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '销售部',
          type: '经理',
          status: 'online',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 8,
          username: '哆啦A梦',
          staffID: 7612,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '编辑部',
          type: '员工',
          status: 'exit',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 9,
          username: '大熊',
          staffID: 2716,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '运营部',
          type: 'online',
          status: 'exit',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 10,
          username: '胖虎',
          staffID: 8612,
          content: '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          department: '研发部',
          type: 'online',
          status: 'online',
          phone: '138****8321',
          time: 1539630042000
        }
      ]
    }
  }
})

// 部门模块
/**
 * @desc 获取所有部门数据列表
 * @return {*}
 */
Mock.mock('/api/department/get-all', async req => {
  console.log('####', req)
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 3,
      list: [
        {
          id: 1,
          departName: '技术部',
          departDesc:
            '服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验.',
          departId: 1982,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 2,
          departName: '营运部',
          departDesc:
            '营运部作为一个综合职能部门，是对公司经营管理的全过程进行计划执行和控制。对公司的各个门店日常经营行为及业务、财务等运营流程和相互衔接执行具体的指导、协调和监督职能。在操作过程中，应做到指导有方、协调有度、监督有力.',
          departId: 62,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 3,
          departName: '编辑部',
          departDesc:
            '一般是负责报纸刊物的市场调研，选题开发，选题列选，选题报批，约稿，出版合同，审稿，成本开支估算，发稿，审读校样，签发付印样，审读样书，结算稿费等事务的部门。',
          departId: 521,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 4,
          departName: '市场部',
          departDesc:
            '市场部的工作主要目标是树立品牌，扩大品牌知名度、提升美誉度，给客户提供产品购买的理由和刺激。而销售部门的工作就是如何把产品送到客户面前，并成功的收回资金，实现商品的价值.',
          departId: 52,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 5,
          departName: '销售部',
          departDesc:
            '销售部是企业市场营销工作中满足市场需求的重要部门。企业在面对市场需求的时候，需要利用销售的手段满足市场的需求。但由于市场的需求方式、需求形态多种多样，也就造成了企业在销售行为的形式上、销售形态的管理上存在着不同的差异性。销售部门的成立与管理需要注意的是根据市场的形态制订相应的销售策略，而相应的策略达成也需要与之相匹配的管理形式才能实现。',
          departId: 42,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 6,
          departName: '审核部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 41,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 7,
          departName: '视频部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 421,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 8,
          departName: '人力资源部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 141,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 9,
          departName: '研发部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 410,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        }
      ]
    }
  }
})

// 数据模块
/**
 * @desc 获取详情页-基础详情页数据
 * @return {*}
 */
Mock.mock('/api/profile/basic?commo_id=10001', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      detail: {
        id: '9865192617124',
        status: '已取货',
        sell_id: '4716201',
        child_id: '867192'
      },
      user: {
        name: '打不死的小强',
        address: '四川省成都市天府新区天府软件园',
        phone: '176****2442',
        postman: '顺丰快递',
        desc: '顺带帮我带一杯奶茶'
      },
      goodlist: [
        {
          id: 1,
          commo_id: '2713',
          commo_title: '矿泉水550ml',
          commo_qrcode: '#7261hgs81641#9712',
          single_price: 2,
          commo_count: 35,
          all_price: 70
        },
        {
          id: 2,
          commo_id: '7512',
          commo_title: '康师傅藤椒牛肉面',
          commo_qrcode: '#ifya123saad2#9712',
          single_price: 4.5,
          commo_count: 18,
          all_price: 81
        },
        {
          id: 3,
          commo_id: '3152',
          commo_title: '呀土豆',
          commo_qrcode: '#nh4971jsu123#5123',
          single_price: 5.5,
          commo_count: 10,
          all_price: 55
        },
        {
          id: 4,
          commo_id: '9712',
          commo_title: '奥利奥饼干',
          commo_qrcode: '#8nsYhs714#412521',
          single_price: 8,
          commo_count: 10,
          all_price: 80
        },
        {
          id: 5,
          commo_id: '8656',
          commo_title: '卫龙亲嘴烧',
          commo_qrcode: '#dggasp8916Twk123',
          single_price: 3.5,
          commo_count: 110,
          all_price: 385
        }
      ]
    }
  }
})

// 用户模块
/**
 * @desc 通过邮箱获取验证码
 * @return {String} code 验证码
 */
Mock.mock('/api/oauth/get-code', () => {
  return {
    code: 1,
    msg: '验证码获取成功',
    data: {
      email: '1063137960@qq.com',
      code: Math.floor(Math.random() * 10000)
    }
  }
})

/**
 * @desc 登陆获取token本地缓存
 */
Mock.mock('/api/oauth/login', () => {
  return {
    code: 1,
    msg: '登陆成功',
    data: {
      token: 'VueErekManageByPengDaoKuan1063137960@qq.com',
      userRole: 'admin'
    }
  }
})

/**
 * @desc 获取当前登陆用户信息
 * @return {Object}
 */
Mock.mock('/api/oauth/current-user', () => {
  return {
    code: 1,
    msg: '获取用户信息成功',
    data: {
      username: '彭道宽',
      email: '1063137960@qq.com',
      avatar: 'https://www.pengdaokuan.cn/static/assets/userpdk.jpeg',
      address: '海南省海口市xx区府城xx街道xx小区xx栋xx楼xx号',
      gender: 'male',
      city: 'China',
      interest: ['吃', '喝', '买'],
      role: {
        grade: 'admin',
        priority: 10
      },
      desc: '笨鸟先飞，所以我先走一步',
      tag: ['Vue-Erek-Manage 开发者', '前端工程师', '平台维护者'],
      link: [
        {
          text: 'Github',
          target: 'https://github.com/PDKSophia/vue-erek-manage'
        },
        {
          text: '掘金',
          target: 'https://juejin.im/user/594ca8a35188250d892f4139/posts'
        },
        {
          text: '微博',
          target: 'https://weibo.com/u/2971991985'
        },
        {
          text: '博客',
          target: 'https://github.com/PDKSophia/blog.io'
        }
      ],
      badge: [
        {
          name: '成就值',
          data: [
            { value: 4592, text: '下载量' },
            { value: 8512, text: '播放量' },
            { value: 27891, text: '阅读量' },
            { value: 29091, text: '点击量' }
          ]
        },
        {
          name: '钱包',
          data: [
            { value: 921, text: 'Q币' },
            { value: 773, text: '优惠券' },
            { value: 514, text: '余额' },
            { value: 7518, text: '积分' }
          ]
        },
        {
          name: '沸点',
          data: [
            { value: 4481, text: '阅读量' },
            { value: 2741, text: '点赞' },
            { value: 1502, text: '评论' },
            { value: 1972, text: '回复' }
          ]
        },
        {
          name: '技能掌握',
          data: [
            { value: 70, text: '前端' },
            { value: 32, text: '后端' },
            { value: 45, text: '其他' },
            { value: 52, text: '网络' }
          ]
        }
      ],
      config: {
        phone: '176****2442'
      }
    }
  }
})
