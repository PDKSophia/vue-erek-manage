import * as types from '../types';

const state = {
  isFetch: false,
  list: [], // 列表数据
  pageNum: 1,
  pageSize: 10,
  total: 0,
  currentItem: {},
  currentIndex: -1
};

const actions = {
  retrieveTableList({ commit }, payload) {
    commit(types.RETRIEVE_TABLE_LIST, { data: payload });
    commit(types.SET_TABLE_FETCH_STATUS);
  }
};

const mutations = {
  [types.SET_TABLE_FETCH_STATUS](state) {
    state.isFetch = true;
  },
  [types.RETRIEVE_TABLE_LIST](state, { data }) {
    state.list = [...data.list];
    state.pageNum = data.current;
    state.pageSize = data.size;
    state.total = data.total;
  }
};

export default {
  state,
  actions,
  mutations
};
