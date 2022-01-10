const utils = require('../utils/project')

class Project {
  constructor (fastify) {
    this.model = fastify.knex('project')
    this.fastify = fastify
  }

  /*
   * get all projects
   */
  async fetch (id) {
    const result = await this.model.where('user_id',id)
    return result
  }

  /*
   * get single project
   */
  async show (user_id, project_id) {
    let singleProject = await this.model
      .where({
        'user_id': user_id,
        'id': project_id
      })
    
    if(singleProject.length > 0 ){
      let tasks = await  this.fastify.knex('task').where({
        ' project_id': singleProject[0].id,
      })
      singleProject[0].tasks = tasks
      return singleProject[0]
    }

    return singleProject
    
  }

   /*
   * create single project
   */
   async create (user_id, name, color_id = 1, tasks = []) {
    let project
    
    if (tasks.length > 0) {
        const tasksResults = await this.fastify.knex.select('id')
        .from('task')
        .whereIn('id', tasks)

      if ((tasksResults.length === tasks.length)) {
        project = await  this.model.returning('*').insert({
          name,
          user_id,
          color_id,
        })
        const tasksProject = utils.reduceProjectTasks(tasks,project[0].id)

        const tasksProjectResults = []
        for (const itemTask of tasksProject){
            const singleTasksProjectResult = await this.fastify.knex('task').returning('id').where({
              'user_id': user_id,
              id:itemTask.id
            }).update(itemTask)
            tasksProjectResults.push(singleTasksProjectResult[0])
          }
        project[0].tasks = tasksProjectResults 

      } else {

        throw new Error('tasks não encontrada')
      }
    } else {
      project = await this.model.returning('*').insert({
        name,
        user_id,
        color_id,
      })

      project[0].tasks = []
    }

    return project[0]
  }


  /*
   * delete single project
   */
  async delete (user_id, project_id) {
    let singleProject = await this.model
      .where({
        'user_id': project_id,
        'id': user_id
      }).del() 
      return singleProject
  }

}

module.exports = Project