const Mock = require('mockjs');

// 通过邮箱获取验证码
Mock.mock('/api/oauth/send-validate-code', () => {
  let response = {
    code: 1,
    msg: '验证码获取成功',
    data: {
      email: '1063137960@qq.com',
      code: Math.floor(Math.random() * 10000)
    }
  };
  return {
    response
  };
});

// 登陆获取token，本地缓存
Mock.mock('/api/oauth/login', () => {
  let response = {
    code: 1,
    msg: '登陆成功',
    data: {
      token: 'VueErekManageByPengDaoKuan1063137960@qq.com',
      userRole: 'admin'
    }
  };
  return {
    response
  };
});

// 通过缓存判断是否过期，并所有请求，都需要携带token
Mock.mock('/api/erek-user/getCurrentUser', () => {
  let response = {
    code: 1,
    msg: '获取用户信息成功',
    data: {
      username: '彭道宽',
      email: '1063137960@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/29560420?s=460&v=4',
      address: '海南省海口市琼山区府城xx街道xx小区xx栋xx楼xx号',
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
  };
  return {
    response
  };
});
