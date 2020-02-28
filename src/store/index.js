import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User'
import snackbar from './modules/Snackbar'


Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    snackbar
  }
})
