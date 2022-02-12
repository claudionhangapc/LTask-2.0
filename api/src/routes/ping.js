const email = require('../services/email')

module.exports = function (fastify, option, done) {
  const emailInsatance = new email(fastify)
  /*
   * ping
   */
  fastify.get('/', async (request, reply) => {
    //const result = await emailInsatance.signIn()
    //console.log(result)
    //reply.send(result)
   reply.send({
      ping: 'pong'
    })
  })

  done()
}