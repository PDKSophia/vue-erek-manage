const Mock = require('mockjs')

// 通过邮箱获取验证码
Mock.mock('/api/oauth/send-validate-code', () => {
  let response = {
    code: 1,
    msg: '验证码获取成功',
    data: {
      email: '1063137960@qq.com',
      code: '1111'
    }
  }
  return {
    response
  }
})
// 登陆
Mock.mock('/api/oauth/login', () => {
  let response = {
    code: 1,
    msg: '登陆成功',
    data: {
      username: 'Admin',
      email: '1063137960@qq.com',
      role: {
        grade: 'admin',
        priority: 10
      }
    }
  }
  return {
    response
  }
})