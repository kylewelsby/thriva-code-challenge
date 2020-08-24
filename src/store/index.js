import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import modules from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: state(),
  modules
})

export default store
