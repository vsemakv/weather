export const state = () => ({
    weather: [],
})

export const mutations = { 
    setWeather(state, payload){
        
        const formatData = {
            ...payload,
            isFavorite: false
        }

        state.weather.unshift(formatData)
    },

    updateWeathers(state, payload){
        payload.weathers.splice(payload.idx, 1);
    },

    updateFavorite(state, payload) {
        state.weather[payload].isFavorite = !state.weather[payload].isFavorite;
    }
}

export const getters = {
    getWeather: (state) => {
        return state.weather
    },

}

export const actions = { 
    async get({commit}, payload){
        await this.$axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lng}&appid=ca29067dffb0c20c387ccadffb76762e`)
        .then(({data}) => {
            commit('setWeather', data)
        })
        .catch(error => {
            throw new Error(`${error}`)
        })
    },
}