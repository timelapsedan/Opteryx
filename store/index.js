import Vuex from 'vuex'

// Create a new Vuex store
const createStore = () => {
  return new Vuex.Store({
    state: {
      navStatus: 'closed'
    },
    mutations: {
      toggleNav (state) {
        state.navStatus = state.navStatus === 'closed' ? 'open' : 'closed'
      },
      setNavClosed (state) {
        state.navStatus = 'closed'
      }
    },
    actions: {
      toggleNav ({ commit }) {
        commit('toggleNav')
      },
      closeNav ({ commit }) {
        commit('setNavClosed')
      }
    },
    getters: {
      isNavOpen (state) {
        return state.navStatus === 'open'
      }
    }
  })
}

export default createStore
