const user = require('../services/user')
/*const schema = require('../schema/user')*/
module.exports = function (fastify, option, done) {
  const userInstance = new user(fastify)

  /*
   * create user
   */
  fastify.post('/signup', /*{ schema: schema.userSign },*/
    async (request, reply) => {
      const {email, password,name} = request.body
      const user = await userInstance.siginup(email, password, name)
      reply.send(user)
    })

  /*
   * login
   */

  fastify.post('/login', /* {
    schema: schema.userLogin
  }, */async (request, reply) => {
    const { email,password } = request.body

    const user = await userInstance.login(email, password)

    reply.send(user)
  })

  done()
}