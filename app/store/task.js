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

}

export const mutations = {

  ADD(state,payload){
    state.tasks.push(payload)
  },

  SET(state, payload){
    state.tasks = payload
  },

  DELETE(state, id){
    const index = state.tasks.findIndex(naver => naver.id ===id)
    state.tasks.splice(index,1)
  },

  UPDATE_SINGLE(state, payload){
    const index = state.tasks.findIndex(task => task.id ===payload.id)
    if (index !== -1) {
      state.tasks.splice(index,1,payload)
    }
    
  }
}