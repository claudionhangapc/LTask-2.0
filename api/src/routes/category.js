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

  fastify.delete('/:category_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { category_id  } = request.params

      const singleCategory = await categoryInstance.delete(id, category_id )

      reply.send(singleCategory)
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

  fastify.put('/:category_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { id } = request.whoiam
      const { category_id } = request.params
      const {name} = request.body
      const singleCategory = await categoryInstance.update(id, category_id, name)
      reply.send(singleCategory)
    } catch (error) {
     
      reply.send(error)
    }
  })


  done()
}