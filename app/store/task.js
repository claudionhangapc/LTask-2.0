export const state = ()=>({
  tasks:[]
})

export const actions = {

  async create({commit},payload){
    const response = await this.$axios.post('/tasks', payload)
    const task = response.data
    commit('ADD',task)
    return task
  },

  async fetch({commit}, payload){
    const response = await this.$axios.get('/tasks')
    const tasks = response.data
    commit('SET', tasks)
  },

  async fetchSingle({commit}, id){
    const response = await this.$axios.get(`/tasks/${id}`)
    const task = response.data
    return task
  },

  async update({commit},{payload,id}){
    
    const response = await this.$axios.put(`/tasks/${id}`, payload)
    const task = response.data
    commit('UPDATE_SINGLE',task)
    return task
  },

  async delete({commit}, id){
    const response =  await this.$axios.delete(`/tasks/${id}`)
    const task = response.data
    commit('DELETE', id)
    return task
  }


}

export const mutations = {

  ADD(state,payload){
    state.tasks.push(payload)
  },

  SET(state, payload){
    state.tasks = payload
  },

  DELETE(state, id){
    const index = state.tasks.findIndex(task => task.id ===id)
    state.tasks.splice(index,1)
  },

  UPDATE_SINGLE(state, payload){
    const index = state.tasks.findIndex(task => task.id ===payload.id)
    if (index !== -1) {
      state.tasks.splice(index,1,payload)
    }
    
  }
}