/**
 * 全局管理 vuex 设计
 *
 * @summary Global Vuex
 * @author PDK
 *
 * Created at     : 2018-11-05
 * Last modified  : 2019-05-26
 */
const types = {
  START_FETCH: 'START_FETCH',
  STOP_FETCH: 'STOP_FETCH',
  UPDATE_HISTORY_URL: 'UPDATE_HISTORY_URL',
  RETRIEVE_BREAD_LIST: 'RETRIEVE_BREAD_LIST'
}
const state = {
  isFetching: false,
  hisUrl: '',
  breadItem: []
}

const actions = {
  startFetch({ commit }) {
    commit(types.START_FETCH)
  },
  stopFetch({ commit }) {
    commit(types.STOP_FETCH)
  },
  updateHistoryUrlAsync({ commit }, payload) {
    commit(types.UPDATE_HISTORY_URL, { data: payload })
  },
  retrieveBreadListAsync({ commit }, payload) {
    commit(types.RETRIEVE_BREAD_LIST, { data: payload })
  }
}

const mutations = {
  [types.START_FETCH](state) {
    state.isFetching = true
  },
  [types.STOP_FETCH](state) {
    state.isFetching = false
  },
  [types.UPDATE_HISTORY_URL](state, payload) {
    state.hisUrl = payload.data
  },
  [types.RETRIEVE_BREAD_LIST](state, payload) {
    const breadArray = payload.data.split('-')
    state.breadItem = [...breadArray]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
