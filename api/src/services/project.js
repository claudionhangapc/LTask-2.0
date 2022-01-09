
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
   * get single projects
   */
  async show (user_id, project_id) {
    let singleProject = await this.model
      .where({
        'user_id': project_id,
        'id': user_id
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

}

module.exports = Project