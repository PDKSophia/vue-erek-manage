import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import global from './modules/global'
import echarts from './modules/echarts'
import list from './modules/list'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    echarts,
    list,
    user
  },
  plugins: [createLogger()]
})
