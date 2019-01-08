import request from './request';
import { Message } from 'iview';
import { getAuthorityToken } from '../utils/vue-token';

let baseUrl = '';
if (process.env.NODE_ENV !== 'production') {
  baseUrl = '/api';
} else {
  // baseUrl = 'http://yun.pengdaokuan.cn/'
}

export default {
  /**
   * desc: 验证码获取
   * @param {String} Email
   * @return {String} Code
   */
  fetchValidateCode: email => {
    return request(`${baseUrl}/oauth/send-validate-code`, {
      method: 'POST',
      data: {
        email: email
      }
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        });
        return response.data;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * desc: 管理员登陆
   * @param {String} UserName
   * @param {String} PassWord
   * @param {String} Code
   * @return {String} Token
   */
  fetchOauthAdminLogin: jsondata => {
    return request(`${baseUrl}/oauth/login`, {
      method: 'POST',
      data: jsondata
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        });
        return response.data;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * desc: 获取用户信息
   * @return {*}
   */
  fetchCurrentUser: () => {
    return request(`${baseUrl}/erek-user/getCurrentUser`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.data;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * desc: 获取用户信息
   * @return {*}
   */
  fetchBadgeList: () => {
    return request(`${baseUrl}/erek-user/getBadgeList`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      if (res.code === 1) {
        return res.list;
      } else {
        Message.error({
          content: res.msg,
          duration: 1.5
        });
      }
    });
  }
};
