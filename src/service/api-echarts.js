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
   * @获取平台近Day天的访问量
   * @param {Number} day
   * @return {*}
   */
  fetchPlatformView: day => {
    return request(`${baseUrl}/platform/nearly/seven-day?day=${day}`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      if (res.code === 1) {
        return res.data;
      } else {
        Message.error({
          content: res.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * @获取平台来源数据
   * @return {*}
   */
  fetchPlatformOrigin: () => {
    return request(`${baseUrl}/platform/getOrigin`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      if (res.code === 1) {
        return res.data;
      } else {
        Message.error({
          content: res.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * @获取实际开销与预算开销
   * @return {*}
   */
  fetchPlatformExpense: () => {
    return request(`${baseUrl}/platform/getExpense`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      if (res.code === 1) {
        return res.data;
      } else {
        Message.error({
          content: res.msg,
          duration: 1.5
        });
      }
    });
  }
};
