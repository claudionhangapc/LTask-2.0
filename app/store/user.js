export const state = ()=>({
  user:{}
})

export const actions = {

  async create({commit},payload){
    const response = await this.$axios.post('/users/signup', payload)
    const user = response.data
    commit('ADD',user)
    return user
  },


}

export const mutations = {

  ADD(state,payload){
    state.user = payload
  },

  

 
}

