import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';
import user from './modules/user';
import table from './modules/table';
import standard from './modules/standard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    user,
    table,
    standard
  }
});
