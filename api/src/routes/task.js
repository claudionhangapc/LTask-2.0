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

  fastify.delete('/:project_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { project_id } = request.params

      const singleProject = await taskInstance.delete(id, project_id)

      reply.send(singleProject)
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
        important,remember_me} = request.body

      const singleTask = await taskInstance.create(id, 
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

  /*
   * update project
   */

  fastify.put('/:project_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { project_id } = request.params
      const {name, color_id, tasks} = request.body
      const singleProject = await taskInstance.update(project_id, id, name, color_id, tasks)
      reply.send(singleProject)
    } catch (error) {
      if(error.message=='tasks não encontrada'){
        reply.code(404).send(error)
      }
      reply.send(error)
    }
  })


  done()
}