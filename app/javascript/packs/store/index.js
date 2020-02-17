import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
Vue.use(Vuex);

import global from './modules/global';

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    global
  }
});

export default store;