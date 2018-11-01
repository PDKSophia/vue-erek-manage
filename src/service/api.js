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
  /**
   * desc: 获取所有数据信息
   * @return {*} 
  */
  fetchAllDataList: () => {
    return request(`${baseUrl}/data/getAllData`, {
      method: 'GET'
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取所有待办任务
   * @return {*} 
  */
  getAllTaskList: () => {
    return request(`${baseUrl}/data/getAllTask`, {
      method: 'GET'
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取 `平台日访问量` 和  `日注册人数`
   * @return {*} 
  */
  fetchPlatFormViewData: () => {
    return request(`${baseUrl}/data/getPlatFormViewData`, {
      method: 'GET'
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取所有首页tab的卡片数据
   * @return {*} 
  */
  fetchAllTabData: () => {
    return request(`${baseUrl}/data/getAllTabCardList`, {
      method: 'GET'
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },

    /**
   * desc: 获取 `平台日访问量` 和  `日注册人数`
   * @return {*} 
  */
  fetchAllOriginData: () => {
    return request(`${baseUrl}/data/getOriginAllData`, {
      method: 'GET'
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
}

