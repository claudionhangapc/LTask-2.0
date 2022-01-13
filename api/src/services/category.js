const utils = require('../utils/project')

class Category {
  constructor (fastify) {
    this.model = fastify.knex('category')
    this.fastify = fastify
  }

  /*
   * get all categories
   */
  async fetch (id) {
    const result = await this.model.where('user_id',id)
    return result
  }

  /*
   * get single category
   */
  async show (user_id, category_id) {
    let singleCategory = await this.model
      .where({
        'user_id': user_id,
        'id': category_id
      })
    
    if(singleCategory.length > 0 ){
      let tasks = await  this.fastify.knex('task').where({
        'category_id': singleCategory[0].id,
      })
      singleCategory[0].tasks = tasks
      return singleCategory[0]
    }

    return singleCategory
    
  }

   /*
   * create single category
   */
   async create (user_id, name) {
    let category

    category = await this.model.returning('*').insert({
      name,
      user_id,
    })

    return category[0]
    
  }

  /*
   * update single project
   */
  async update ( project_id, user_id, name, color_id = 1, tasks = []) {
    let project
    
    if (tasks.length > 0) {
        const tasksResults = await this.fastify.knex.select('id')
        .from('task')
        .whereIn('id', tasks)

      if ((tasksResults.length === tasks.length)) {
        project = await this.model.returning('*')
        .where({ 'user_id': user_id,'id':project_id})
        .update({
          name,
          color_id,
          'date_updated':new Date()
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
      project = await this.model.returning('*')
      .where({
        'user_id': user_id,
        'id':project_id
      })
      .update({
        name,
        color_id,
        'date_updated':new Date()
      })

      project[0].tasks = []
    }

    return project
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

module.exports = Category