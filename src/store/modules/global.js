import * as types from '../types'

const state = {
  breadItem: [],
  histroyUrl: '',
  isFetching: false
}

const actions = {
  setHistroyUrl({ commit }, payload) {
    commit(types.SET_HISTROY_URL, { data: payload })
  },
  recevieBreadItem({ commit }, payload) {
    commit(types.SET_BREADITEM_ARRAY, { data: payload })
  },
  startFetch({ commit }) {
    commit(types.START_FETCH_DATA)
  },
  stopFetch({ commit }) {
    commit(types.STOP_FETCH_DATA)
  }
}

const mutations = {
  [types.SET_HISTROY_URL](state, payload) {
    state.histroyUrl = payload.data
  },
  [types.SET_BREADITEM_ARRAY](state, payload) {
    const breadArray = payload.data.split('-')
    state.breadItem = [...breadArray]
  },
  [types.START_FETCH_DATA](state) {
    state.isFetching = true
  },
  [types.STOP_FETCH_DATA](state) {
    state.isFetching = false
  }
}

export default {
  state,
  actions,
  mutations
}
