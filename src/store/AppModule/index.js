import * as types from './Type'

const state = {
  welcome: 'Welcome',
  sum: 0
}

const actions = {
  changeSum ({ commit }, status) {
    commit(types.CHANGE_SUM, status)
  }
}

const getters = {
  getWelcome: state => state.welcome,
  getSum: state => state.sum
}

const mutations = {
  [types.CHANGE_SUM] (state, status) {
    state.sum = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
