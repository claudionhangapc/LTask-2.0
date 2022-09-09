export const state = ()=>({
  user:{}
})

export const actions = {

  async getUser({commit}){
    const response = await this.$axios.get('/users/user')
    const user = response.data
    commit('SET',user)
    return user
  }, 

  async create({commit},payload){
    const response = await this.$axios.post('/users/signup', payload)
    const user = response.data
    commit('SET',user)
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
  },

  async fetchProfilePictures ({commit}){
    const response = await this.$axios.get('/users/profile')
    const pictures = response.data
    return pictures
  },

  async updateProfilePicture({commit}, payload){
    const response = await this.$axios.put('/users/user/profile/picture', payload)
    const result = response.data
    return result 
  },

  async loginWithGoogleCode({commit}, payload){
    const response = await this.$axios.post('/users/login/google', payload)
    const result = response.data
    return result
 
  }


  

}

export const mutations = {
  SET(state,payload){
    state.user = payload
  },

  
 
}

