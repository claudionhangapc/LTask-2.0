const utils = require('../utils/project')

class Task {
  constructor (fastify) {
    this.model = fastify.knex('task')
    this.fastify = fastify
  }

  /*
   * get all tasks
   */
  async fetch (id) {
    const tasks = await this.model.where('user_id',id)
    return tasks
  }

  /*
   * get single task
   */
  async show (user_id, task_id) {
    let singleTask = await this.model
      .where({
        'user_id': user_id,
        'id': task_id
      })
    
    if(singleTask.length > 0 ){
      if(singleTask[0].project_id){
        let project = await  this.fastify.knex('project').where({
          'id': singleTask[0].project_id,
        })
        if(project.length > 0 ){
          singleTask[0].project = project[0]
        }
       
      }
      
      return singleTask[0]
    }

    return singleTask
    
  }

   /*
   * create single project
   */
   async create (user_id,name, date_to_start = null, project_id = null, category_id = null, important = null,remember_me =null) {
    let task
    
    if (project_id) {
      /*  const tasksResults = await this.fastify.knex.select('id')
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
      }*/
    } else {
      task = await this.model.returning('*').insert({
        user_id,
        name, 
        date_to_start, 
        project_id, 
        category_id, 
        important,
        remember_me
      })

      task[0].project = []
    }

    return task[0]
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

module.exports = Task