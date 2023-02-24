export const state = () => ({
    errorModal: false,
  })
  
  export const mutations = {
    open(state) {
        state.errorModal = true
    },
    close(state) {
        state.errorModal = false
    },
  }
  
  export const getters = {
    showError: (state) => { 
      return state.showError;
    }
  }
  
  export const actions = {
    toggle({ commit, state }, value) {
      if (state.showError === true) {
        commit('close')
      } else {
        commit('open')
      }
    },
    close({ commit, state }) {
          commit('close')
      },
  }