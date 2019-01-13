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
   * desc: 获取表格列表数据
   * @return {*}
   */
  fetchRequestTableApi: () => {
    return request(`${baseUrl}/erek-list/table`, {
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
   * desc: 获取所有待办任务
   * @return {*}
   */
  fetchAllTaskList: () => {
    return request(`${baseUrl}/erek-list/standard/all-task`, {
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
  },

  /**
   * desc: 获取标准列表数据
   * @return {*}
   */
  fetchRequestStandardApi: () => {
    return request(`${baseUrl}/erek-list/standard`, {
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
   * desc: 获取卡片列表数据
   * @return {*}
   */
  fetchRequestCardApi: () => {
    return request(`${baseUrl}/erek-list/card`, {
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
   * @获取某一商品退款的标准详情数据
   * @param {Number} commo_id
   * @return {*}
   */
  fetchCommodityProfile: commo_id => {
    return request(`${baseUrl}/erek-profile/basic?commo_id=${commo_id}`, {
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
   * @获取首页数据卡片
   * @return {*}
   */
  fetchTotalCardList: () => {
    return request(`${baseUrl}/card/total`, {
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
