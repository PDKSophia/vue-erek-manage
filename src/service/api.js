import request from './request'
import { Message } from 'iview'

let baseUrl = ''
if (process.env.NODE_ENV !== 'production') {
  baseUrl = '/api'
} else {
  // baseUrl = 'http://yun.pengdaokuan.cn/'
}

export default {
  /**
   * desc: 验证码获取
   * @param {String} Email
   * @return {String} Code 
  */
  fetchValidateCode: (email) => {
    return request(`${baseUrl}/oauth/send-validate-code`, {
      method: 'POST',
      data: {
        email: email
      }
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.data
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 管理员登陆
   * @param {String} UserName
   * @param {String} PassWord
   * @param {String} Code
   * @return {*} 
  */
  fetchOauthAdminLogin: (jsondata) => {
    return request(`${baseUrl}/oauth/login`, {
      method: 'POST',
      data: jsondata
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.data
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
}
