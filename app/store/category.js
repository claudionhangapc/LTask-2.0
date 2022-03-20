export const state = ()=>({
  categories:[]
})

export const actions = {

  async fetch({commit}, payload){
    const response = await this.$axios.get('/categories')
    const categories = response.data
    commit('SET', categories)
  },

  async fetchSingle({commit}, id){
    const response = await this.$axios.get(`/categories/${id}`)
    const category = response.data
    return category
  }

}

export const mutations = {

  SET(state, payload){
    state.categories = payload
  },

}