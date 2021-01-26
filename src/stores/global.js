import { createStore } from 'vuex'
import { searchData } from '../data/searches'

export const globalStore = createStore({
  state: {
    searches: []
  },
  getters: {},
  mutations: {
    fetchSearches(state, payload) {
      state.searches = payload
    }
  },
  actions: {
    fetchSearches(context) {
      context.commit('fetchSearches', searchData)
    }
  }
})