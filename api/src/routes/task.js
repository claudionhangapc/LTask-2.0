const task = require('../services/task')
//const schema = require('../schemas/user')

module.exports = function (fastify, option, done) {
   const taskInstance = new task(fastify)

  /*
   * get all projects
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const tasks = await taskInstance.fetch(id)
      reply.send(tasks)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * show details
   */

  fastify.get('/:task_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { task_id } = request.params

      const singleTask = await taskInstance.show(id, task_id)

      reply.send(singleTask)
    } catch (error) {
      reply.send(error)
    }
  })


  /*
   * delete single project
   */

  fastify.delete('/:task_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { task_id } = request.params

      const singleTask = await taskInstance.delete(id, task_id)

      reply.send(singleTask)
    } catch (error) {
      reply.send(error)
    }
  })


  /*
   * create task
   */

  fastify.post('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const {name, date_to_start, 
        project_id, category_id,
        important,remember_me,status_id} = request.body

      const singleTask = await taskInstance.create(id, 
        name, status_id, date_to_start, 
        project_id, category_id,
        important,remember_me)

      reply.send(singleTask)
      
    } catch (error) {
      if(error.message=='tasks não encontrada'){
        reply.code(404).send(error)
      }
      reply.send(error)
    }
  })

  /*
   * update task
   */

  fastify.put('/:task_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { task_id } = request.params
      
      const {name, date_to_start, 
        project_id, category_id,
        important,remember_me} = request.body
      
      const singleTask = await taskInstance.update(id,task_id, 
        name, date_to_start, 
        project_id, category_id,
        important,remember_me)

      reply.send(singleTask)
    } catch (error) {
      if(error.message=='tasks não encontrada'){
        reply.code(404).send(error)
      }
      reply.send(error)
    }
  })



  //
  
  /*
   * find task by project id
  */

  fastify.get('/project_id/:project_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { project_id } = request.params
      const tasks = await taskInstance.fetchByProjectID(id, project_id)
      reply.send(tasks)
    } catch (error) {
      reply.send(error)
    }
  })


  done()
}