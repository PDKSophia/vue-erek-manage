import * as types from '../types';

const state = {
  erekUser: {}
};

const actions = {
  setErekUser({ commit }, payload) {
    commit(types.SET_EREK_USER_INFO, { data: payload });
  }
};

const mutations = {
  [types.SET_EREK_USER_INFO](state, payload) {
    state.erekUser = { ...payload.data };
  }
};

export default {
  state,
  actions,
  mutations
};
