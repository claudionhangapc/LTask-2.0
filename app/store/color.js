export const state = ()=>({
  colors:[]
})

export const actions = {

  async fetch({commit}, payload){
    const response = await this.$axios.get('/colors')
    const colors = response.data
    commit('SET', colors)
  },

  async fetchSingle({commit}, id){
    const response = await this.$axios.get(`/colors/${id}`)
    const color = response.data
    return color
  }

}

export const mutations = {

  SET(state, payload){
    state.colors = payload
  },

}