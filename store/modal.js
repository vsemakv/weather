export const state = () => ({
    showModal: false,
    errorModal: false,
  })
  
  export const mutations = {
    open(state) {
      state.showModal = true
    },
    close(state) {
      state.showModal = false
    },
    openError(state){
      state.errorModal = true
    },
    closeError(state){
      state.errorModal = false
    }
  }
  
  export const getters = {
    showModal: (state) => {
      return state.showModal;
    },
    showError: (state) => { 
      return state.showError;
    }
  }
  
  export const actions = {
    toggle({ commit, state }, value) {
      if (state.showModal === true) {
        commit('close')
      } else {
        commit('open')
      }
    },

    close({ commit, state }) {
          commit('close')
      },

    toggleError({ commit, state }, value) {
      if (state.showError === true) {
        commit('closeError')
      } else {
        commit('openError')
      }
    },
    closeError({ commit, state }) {
      commit('closeError')
  },
  }