/**
 * 所有Service API请求
 *
 * @summary Service API
 * @author PDK
 *
 * Created at     : 2019-01-11
 * Last modified  : 2019-05-26
 */
import axios from 'axios'
import request from './request'

// 用户模块
/**
 * @desc 通过邮箱发送验证码
 * @param {String} email 邮箱
 * @return {String} code 验证码
 */
export function retrieveCode(email) {
  return request(
    {
      url: `/oauth/get-code`,
      method: 'POST',
      data: {
        email: email
      }
    },
    axios,
    false
  )
}
/**
 * @desc 管理人员登陆
 * @param {Object} payload
 * @return {String} Token
 */
export function oauthLogin(payload) {
  return request(
    {
      url: `/oauth/login`,
      method: 'POST',
      data: payload
    },
    axios,
    false
  )
}
/**
 * @desc 通过token获取用户信息
 * @return {*}
 */
export function retrieveCurrentUser() {
  return request(
    {
      url: `/oauth/current-user`,
      method: 'GET'
    },
    axios,
    true
  )
}

// 图表模块
/**
 * @desc 获取所有卡片数据
 * @return {*}
 */
export function retrieveCardData() {
  return request(
    {
      url: `/echarts/card/get-all`,
      method: 'GET'
    },
    axios,
    true
  )
}
/**
 * @desc 获取平台访问量
 * @return {*}
 */
export function retrieveVisitData() {
  return request(
    {
      url: `/echarts/visit/get-all`,
      method: 'GET'
    },
    axios,
    true
  )
}
/**
 * @desc 获取平台来源数据
 * @return {*}
 */
export function retrieveOriginData() {
  return request(
    {
      url: `/echarts/origin/get-all`,
      method: 'GET'
    },
    axios,
    true
  )
}
/**
 * @desc 获取实际开销与预算开销
 * @return {*}
 */
export function retrieveExpenseData() {
  return request(
    {
      url: `/echarts/expense/get-all`,
      method: 'GET'
    },
    axios,
    true
  )
}

// 列表模块
/**
 * @desc 获取模拟数据的列表
 * @return {*}
 */
export function retrieveList(payload) {
  return request(
    {
      url: `/list/get-all`,
      method: 'GET',
      params: payload
    },
    axios,
    true
  )
}
