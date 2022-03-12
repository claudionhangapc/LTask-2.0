export const state = ()=>({
  projects:[]
})

export const getters = {
  find: (state) => (id) => state.itemsWorkflow.find(item => item.id == id),
}

export const actions = {

  async create({commit},payload){
    const response = await this.$axios.post('/projects', payload)
    const project = response.data
    commit('ADD',project)
    return project 
  },

  async fetch({commit}, payload){
    const response = await this.$axios.get('/projects')
    const projects = response.data
    commit('SET', projects)
  },

  async fetchSingle({commit}, id){
    const response = await this.$axios.get(`/projects/${id}`)
    const project = response.data
    return project
  },

  async update({commit},{payload,id}){
    
    const response = await this.$axios.put(`/projects/${id}`, payload)
    const project = response.data
    commit('UPDATE_SINGLE',project)
    return project
  },

  async delete({commit}, id){
    const response =  await this.$axios.delete(`/projects/${id}`)
    const project = response.data
    commit('DELETE', id)
    return project
  }


}

export const mutations = {

  ADD(state,payload){
    state.projects.push(payload)
  },

  SET(state, payload){
    state.projects = payload
  },

  DELETE(state, id){
    const index = state.projects.findIndex(project => project.id ===id)
    state.projects.splice(index,1)
  },

  UPDATE_SINGLE(state, payload){
    const index = state.projects.findIndex(project => project.id ===payload.id)
    if (index !== -1) {
      state.projects.splice(index,1,payload)
    }
    
  }
}