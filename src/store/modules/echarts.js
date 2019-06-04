/**
 * 图表管理 vuex 设计
 *
 * @summary Echarts Vuex
 * @author PDK
 *
 * Created at     : 2019-05-26
 * Last modified  : 2019-05-26
 */
import {
  retrieveCardData,
  retrieveVisitData,
  retrieveOriginData,
  retrieveExpenseData
} from '../../service/api'

const types = {
  RETRIEVE_CARD_DATA: 'RETRIEVE_CARD_DATA',
  RETRIEVE_VISIT_DATA: 'RETRIEVE_VISIT_DATA',
  RETRIEVE_ORIGIN_DATA: 'RETRIEVE_ORIGIN_DATA',
  RETRIEVE_EXPENSE_DATA: 'RETRIEVE_EXPENSE_DATA'
}

const actions = {
  // 获取所有卡片数据
  async retrieveCardDataAsync({ commit }, payload) {
    try {
      const data = await retrieveCardData(payload)
      commit(types.RETRIEVE_CARD_DATA, { data: data })
    } catch (err) {}
  },
  // 获取平台访问量
  async retrieveVisitDataAsync({ commit }, payload) {
    try {
      const data = await retrieveVisitData(payload)
      commit(types.RETRIEVE_VISIT_DATA, { data: data })
    } catch (err) {}
  },
  // 获取平台来源数据
  async retrieveOriginDataAsync({ commit }, payload) {
    try {
      const data = await retrieveOriginData(payload)
      commit(types.RETRIEVE_ORIGIN_DATA, { data: data })
    } catch (err) {}
  },
  // 获取实际开销与预算开销
  async retrieveExpenseDataAsync({ commit }, payload) {
    try {
      const data = await retrieveExpenseData(payload)
      commit(types.RETRIEVE_EXPENSE_DATA, { data: data })
    } catch (err) {}
  }
}

const state = {
  cardList: [], // 卡片数据
  visitList: {}, // 平台访问数据
  originList: [], // 平台来源数据
  expenseList: {} // 平台开销数据
}

const mutations = {
  [types.RETRIEVE_CARD_DATA](state, payload) {
    state.cardList = [...payload.data]
  },
  [types.RETRIEVE_VISIT_DATA](state, payload) {
    state.visitList = { ...payload.data }
  },
  [types.RETRIEVE_ORIGIN_DATA](state, payload) {
    state.originList = [...payload.data]
  },
  [types.RETRIEVE_EXPENSE_DATA](state, payload) {
    state.expenseList = { ...payload.data }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
