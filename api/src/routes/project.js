const project = require('../services/project')
//const schema = require('../schemas/user')

module.exports = function (fastify, option, done) {
   const projectInstance = new project(fastify)

  /*
   * get all projects
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const projects = await projectInstance.fetch(id)
      reply.send(projects)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * show details
   */

  fastify.get('/:project_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { project_id } = request.params

      const single_project = await projectInstance.show(id, project_id)

      reply.send(single_project)
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

      const singleProject = await projectInstance.delete(id, project_id)

      reply.send(singleProject)
    } catch (error) {
      reply.send(error)
    }
  })


  /*
   * create project
   */

  fastify.post('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const {name, color_id, tasks} = request.body
      const singleProject = await projectInstance.create(id, name, color_id, tasks)
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