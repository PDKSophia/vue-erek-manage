/**
 * 用户管理 vuex 设计
 *
 * @summary User Vuex
 * @author PDK
 *
 * Created at     : 2018-10-31
 * Last modified  : 2019-05-26
 */
import { retrieveCode, oauthLogin, retrieveCurrentUser } from '../../service/api'
import { setEmailCode, setAuthorityToken, setAuthorityRole } from 'utils/auth'
import { showSuccessTips } from 'utils/utils'

const types = {
  RETRIEVE_EMAIL_CODE: 'RETRIEVE_EMAIL_CODE',
  OAUTH_LOGIN: 'OAUTH_LOGIN',
  RETRIEVE_USER_INFO: 'RETRIEVE_USER_INFO',
  SET_USER_INFO: 'SET_USER_INFO'
}

const actions = {
  // 获取验证码
  async retrieveEmailCodeAsync({ commit }, payload) {
    try {
      const data = await retrieveCode(payload)
      commit(types.RETRIEVE_EMAIL_CODE, { code: data.code })
      showSuccessTips('notice', `您的验证码是 : ${data.code}`, 2.5)
    } catch (err) {}
  },
  // 管理员登陆
  async oauthLoginAsync({ commit }, payload) {
    try {
      const data = await oauthLogin(payload)
      commit(types.OAUTH_LOGIN, { data: data })
      showSuccessTips('message', `登陆成功`, 1.5)
    } catch (err) {}
  },
  // 通过token获取用户信息
  async retrieveUserInfoAsync({ commit }) {
    try {
      const data = await retrieveCurrentUser()
      commit(types.RETRIEVE_USER_INFO, { data: data })
    } catch (err) {}
  },
  updateUserAsync({ commit }, payload) {
    commit(types.SET_USER_INFO, { data: payload })
  }
}

const state = {
  code: '',
  user: {}
}

const mutations = {
  [types.RETRIEVE_EMAIL_CODE](state, payload) {
    setEmailCode(payload.code)
    state.code = payload.code
  },
  [types.OAUTH_LOGIN](state, payload) {
    const { token, userRole } = payload.data
    setAuthorityToken(token)
    setAuthorityRole(userRole)
  },
  [types.RETRIEVE_USER_INFO](state, payload) {
    state.user = payload.data
  },
  [types.SET_USER_INFO](state, payload) {
    state.user = payload.data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
