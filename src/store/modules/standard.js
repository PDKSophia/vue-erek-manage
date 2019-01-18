import * as types from '../types';

const state = {
  isFetch: false,
  taskStatusList: [], // 卡片数据
  list: [], // 列表数据
  pageNum: 1,
  pageSize: 10,
  total: 0,
  currentItem: {},
  currentIndex: -1
};

const actions = {
  retrieveTaskStatusList({ commit }, payload) {
    commit(types.RETRIEVE_TASK_LIST, { data: payload });
  },
  retrieveStandardList({ commit }, payload) {
    commit(types.RETRIEVE_STANDARD_LIST, { data: payload });
    commit(types.SET_STAND_FETCH_STATUS);
  }
};

const mutations = {
  [types.SET_STAND_FETCH_STATUS](state) {
    state.isFetch = true;
  },
  [types.RETRIEVE_TASK_LIST](state, payload) {
    state.taskStatusList = [...payload.data];
  },
  [types.RETRIEVE_STANDARD_LIST](state, { data }) {
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
