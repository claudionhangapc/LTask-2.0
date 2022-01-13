const category = require('../services/category')
//const schema = require('../schemas/user')

module.exports = function (fastify, option, done) {
   const categoryInstance = new category(fastify)
   
  /*
   * get all projects
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const categories = await categoryInstance.fetch(id)
      reply.send(categories)
    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * show details
   */

  fastify.get('/:category_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { category_id } = request.params

      const singleCategory = await categoryInstance.show(id,category_id)

      reply.send(singleCategory)
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

      const singleProject = await categoryInstance.delete(id, project_id)

      reply.send(singleProject)
    } catch (error) {
      reply.send(error)
    }
  })


  /*
   * create category
   */

  fastify.post('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const {name} = request.body
      const singleCategory = await categoryInstance.create(id, name)
      reply.send(singleCategory)
    } catch (error) {
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
      const singleProject = await categoryInstance.update(project_id, id, name, color_id, tasks)
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