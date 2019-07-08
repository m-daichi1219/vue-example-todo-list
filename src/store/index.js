import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 保持するデータ例
const state = {
  data: {
    token: localStorage.getItem('token'), // `token`は locale storage から取得する
    userId: null // `userId`はnullで初期化
  }
}

export default new Vuex.Store({
  state, // 定義したstateを`state`オプションに指定
  getters,
  actions,
  mutations
})
