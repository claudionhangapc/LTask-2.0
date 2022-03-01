export const state = ()=>({
  tasks:[]
})

export const actions = {

  async create({commit},payload){
    const response = await this.$axios.post('/tasks/', payload)
    const task = response.data
    commit('ADD',task)
    return task
  },

}

export const mutations = {

  ADD(state,payload){
    state.tasks = payload
  },
}