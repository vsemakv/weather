export const state = () => ({
    favoritesList: [],
})

export const mutations = { 
    setFavorite(state, payload){
        state.favoritesList.unshift(payload)
        localStorage.setItem("card", JSON.stringify(state.favoritesList));
    },

    
    updateFavorite(state, payload) {
        state.favoritesList[payload].isFavorite = !state.favoritesList[payload].isFavorite

        state.favoritesList.splice(payload, 1);
    }
}

export const getters = {
    getFavorite: (state) => {
        return state.favoritesList
    }, 
}

export const actions = { 
    setFavorite({ commit }, payload) {
        commit('setFavorite', payload)
      },
}