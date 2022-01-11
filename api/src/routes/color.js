const color = require('../services/color')
//const schema = require('../schemas/color')

module.exports = function (fastify, option, done) {
   const colorInstance = new color(fastify)
   
  /*
   * get all colors
   */

  fastify.get('/', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {

      const colors = await colorInstance.fetch()
      reply.send(colors)

    } catch (error) {
      reply.send(error)
    }
  })

  /*
   * show details
   */

  fastify.get('/:color_id', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      const { color_id } = request.params

      const singleColor = await colorInstance.show(color_id)

      reply.send(singleColor)
    } catch (error) {
      reply.send(error)
    }
  })

  done()
}