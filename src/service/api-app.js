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
   * @获取所有数据信息
   * @return {*}
   */
  fetchAllDataList: () => {
    return request(`${baseUrl}/data/getAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * @获取标准列表数据信息
   * @return {*}
   */
  fetchStandAllDataList: () => {
    return request(`${baseUrl}/data/getStandAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * @获取 `平台日访问量` 和  `日注册人数`
   * @return {*}
   */
  fetchPlatFormViewData: () => {
    return request(`${baseUrl}/data/getPlatFormViewData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },
  /**
   * @获取所有首页的卡片数据
   * @return {*}
   */
  fetchAllTabData: () => {
    return request(`${baseUrl}/data/getAllTabCardList`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },

  /**
   * @获取 `站点访问来源数据`
   * @return {*}
   */
  fetchAllOriginData: () => {
    return request(`${baseUrl}/data/getOriginAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },

  /**
   * @获取 `预算开销和实际开销`
   * @return {*}
   */
  fetchExpenseOriginData: () => {
    return request(`${baseUrl}/data/getExpenseAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  },

  /**
   * @获取 `个人页 - 个人中心` 数据
   * @return {*}
   */
  fetchAllListData: () => {
    return request(`${baseUrl}/erek-user-all/getAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then(res => {
      let { response } = res;
      if (response.code === 1) {
        return response.list;
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        });
      }
    });
  }
};
