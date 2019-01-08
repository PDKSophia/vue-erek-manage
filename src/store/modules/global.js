import * as types from '../types';

const state = {
  breadItem: [],
  histroyUrl: ''
};

const actions = {
  setHistroyUrl({ commit }, payload) {
    commit(types.SET_HISTROY_URL, { data: payload });
  },
  recevieBreadItem({ commit }, payload) {
    commit(types.SET_BREADITEM_ARRAY, { data: payload });
  }
};

const mutations = {
  [types.SET_HISTROY_URL](state, payload) {
    state.histroyUrl = payload.data;
  },
  [types.SET_BREADITEM_ARRAY](state, payload) {
    const breadArray = payload.data.split('-');
    state.breadItem = [...breadArray];
  }
};

export default {
  state,
  actions,
  mutations
};
