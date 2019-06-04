/**
 * 列表管理 vuex 设计
 *
 * @summary List Vuex
 * @author PDK
 *
 * Created at     : 2018-11-05
 * Last modified  : 2019-05-26
 */
import { retrieveList } from '../../service/api'

const types = {
  RETRIEVE_LIST: 'RETRIEVE_LIST',
  UPDATE_FETCH_STATUS: 'UPDATE_FETCH_STATUS',
  SET_PAGE_NUM: 'SET_PAGE_NUM',
  SET_PAGE_SIZE: 'SET_PAGE_SIZE'
}

const actions = {
  // 获取列表数据
  async retrieveListAsync({ commit }, payload) {
    try {
      const data = await retrieveList(payload)
      commit(types.RETRIEVE_LIST, { data: data })
    } catch (err) {}
  },
  // 修改fetch请求状态
  updateFetchAsync({ commit }) {
    commit(types.UPDATE_FETCH_STATUS)
  },
  setPageNum({ commit }, pageNum) {
    commit(types.SET_PAGE_NUM, pageNum)
  },
  setPageSize({ commit }, pageSize) {
    commit(types.SET_PAGE_SIZE, pageSize)
  }
}

const state = {
  isFetch: false,
  list: [], // 列表数据
  pageNum: 0,
  pageSize: 0,
  total: 0,
  currentItem: {},
  currentIndex: -1
}

const mutations = {
  [types.RETRIEVE_LIST](state, payload) {
    const { list, current, size, total } = payload.data
    state.list = [...list]
    state.pageNum = current
    state.pageSize = size
    state.total = total
  },
  [types.UPDATE_FETCH_STATUS](state) {
    state.isFetch = !state.isFetch
  },
  [types.SET_PAGE_NUM](state, payload) {
    state.pageNum = payload
  },
  [types.SET_PAGE_SIZE](state, payload) {
    state.pageSize = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
