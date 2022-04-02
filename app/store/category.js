export const state = ()=>({
  categories:[]
})

export const getters = {
  find: (state) => (id) => state.categories.find(item => item.id == id),
}

export const actions = {

  async create({commit},payload){
    const response = await this.$axios.post('/categories', payload)
    const category = response.data
    commit('ADD',category)
    return category
  },

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
  
  ADD(state,payload){
    state.categories.push(payload)
  },

  SET(state, payload){
    state.categories = payload
  },

}