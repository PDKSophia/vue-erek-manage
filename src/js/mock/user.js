/**
 * 用户mock数据设计
 *
 * @summary User Mock
 * @author PDK
 *
 * Created at     : 2019-12-10
 * Last modified  : 2019-01-11
 */

const Mock = require('mockjs')

/**
 * @通过邮箱获取验证码
 */
Mock.mock('/api/oauth/send-validate-code', () => {
  let response = {
    code: 1,
    msg: '验证码获取成功',
    data: {
      email: '1063137960@qq.com',
      code: Math.floor(Math.random() * 10000)
    }
  }
  return {
    response
  }
})

/**
 * @登陆获取token本地缓存
 */
Mock.mock('/api/oauth/login', () => {
  let response = {
    code: 1,
    msg: '登陆成功',
    data: {
      token: 'VueErekManageByPengDaoKuan1063137960@qq.com',
      userRole: 'admin'
    }
  }
  return {
    response
  }
})

/**
 * @获取当前登陆用户信息
 */
Mock.mock('/api/erek-user/getCurrentUser', () => {
  let response = {
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
      ]
    }
  }
  return {
    response
  }
})

/**
 * @个人中心
 * @获得的徽章
 */
Mock.mock('/api/erek-user/getBadgeList', () => {
  return {
    code: 1,
    msg: '获取成功',
    list: [
      {
        name: '成就值',
        data: [
          { value: 6152, text: '查看量' },
          { value: 4522, text: '下载量' },
          { value: 192761, text: '点击量' }
        ]
      },
      {
        name: '钱包',
        data: [
          { value: 921, text: 'Q币' },
          { value: 773, text: '优惠券' },
          { value: 514, text: '余额' }
        ]
      },
      {
        name: '沸点',
        data: [
          { value: 4481, text: '阅读量' },
          { value: 2741, text: '点赞' },
          { value: 1502, text: '评论' }
        ]
      },
      {
        name: '技能掌握',
        data: [
          { value: 66, text: '前端' },
          { value: 32, text: '后端' },
          { value: 45, text: '其他' }
        ]
      }
    ]
  }
})

/**
 * @个人中心
 * @获取近七日访问量
 */
