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
    const tasks = await this.fastify
    .knex.select(['task.id',
    'task.date_created','task.date_updated','task.date_to_start',
    'task.important','task.remember_me',
    'task.name','project.name as project_name', 'category.name as category_name'])
    .table('task')
    .leftJoin('category','category.id','task.category_id')
    .leftJoin('project','project.id','task.project_id')
    .where('task.user_id',id)

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
   async create (user_id,name, status_id = 1, date_to_start = null, project_id = null, category_id = null, important = null,remember_me =null) {
    let task
    
    if (project_id) {
       const projectResults = await this.fastify.knex.select('*')
        .from('project')
        .where('id', project_id)

       if ((projectResults.length > 0)) {
        task = await this.model.returning('*').insert({
          user_id,
          name, 
          date_to_start, 
          project_id, 
          category_id, 
          important,
          remember_me,
          status_id
        })
  
        task[0].project = projectResults[0]
      } else {

        throw new Error('projeto não encontrada')
      }
    } else {
      task = await this.model.returning('*').insert({
        user_id,
        name, 
        date_to_start, 
        project_id, 
        category_id, 
        important,
        remember_me,
        status_id
      })

      task[0].project = []
    }

    return task[0]
  }

  /*
   * update single task
   */

  async update (user_id, task_id, name, date_to_start = null, project_id = null, category_id = null, important = null,remember_me =null) {
    let task
    
    if (project_id) {
      const projectResults = await this.fastify.knex.select('*')
        .from('project')
        .where('id', project_id)

        if ((projectResults.length > 0)) {
          task = await this.model.returning('*')
          .where({
            'user_id': user_id,
            'id':task_id
          })
          .update({
            user_id,
            name, 
            date_to_start, 
            project_id, 
            category_id, 
            important,
            remember_me
          })
    
          task[0].project = projectResults[0]
        } else {
  
          throw new Error('projeto não encontrada')
        }
      
    }else{
    
    task = await this.model.returning('*')
      .where({
        'user_id': user_id,
        'id':task_id
      })
      .update({
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
   * delete single project
   */
  async delete (user_id, task_id) {
    let singleTask = await this.model
      .where({
        'user_id': user_id,
        'id': task_id
      }).del() 
      return singleTask
  }


  /*
  * find task by project_id
  */

  async fetchByProjectID (id, project_id){
    
    const tasks = await this.fastify
    .knex.select(['task.id',
    'task.date_created','task.date_updated','task.date_to_start',
    'task.important','task.remember_me',
    'task.name','project.name as project_name', 'category.name as category_name'])
    .table('task')
    .leftJoin('category','category.id','task.category_id')
    .leftJoin('project','project.id','task.project_id')
    .where({
      'task.user_id':id,
      'task.project_id':project_id
      })

    return tasks
  }
}

module.exports = Task