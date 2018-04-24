import * as types from './mutation-types'
// 全局
const mutations = {
  // 获取到types上面的常量 用于判断修改
  [types.WELCOME] (state, welcome) {
    state.title = welcome
  }
}

export default mutations
