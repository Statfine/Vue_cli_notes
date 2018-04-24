import Vue from 'vue'
import Vuex from 'vuex'
import app from './AppModule'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

/**
 *  modules和state类似， 多一层级
 */
const store = new Vuex.Store({
  modules: {
    app
  },
  state: { title: 'TitleWelcome' },
  getters,
  mutations
})

export default store
