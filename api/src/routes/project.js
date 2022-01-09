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


  done()
}