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

  async activateUser({commit},id){
    //alert(id)
    const response = await this.$axios.get(`/users/user/confirm/${id}`)

    return response
  },

  async addProfilePicture({commit},payload){
    const response = await this.$axios.post('/users/profile', payload)
    const userProfile = response.data

    return userProfile
  }

}

export const mutations = {

  ADD(state,payload){
    state.user = payload
  },
 
}

