const user = require('../services/user')
const schema = require('../schemas/user')

module.exports = function (fastify, option, done) {
  const userInstance = new user(fastify)

  /*
   * create user
   */
  fastify.post('/signup', { schema: schema.userSign },
    async (request, reply) => {
      const {email, password, name} = request.body
      const user = await userInstance.siginup(email, password, name)
      reply.send(user)
    })

  /*
   * login
   */

  fastify.post('/login',  {
    schema: schema.userLogin
  }, async (request, reply) => {
    try {
      const { email,password } = request.body

      const user = await userInstance.login(email, password)

      if (!user) reply.code(404).send('usuário não encontrado')

      if (user.hasOwnProperty('message')) reply.code(401).send(user.message)
      
      reply.send(user)

    } catch (error) {
      reply.send(error)
    }
    
  })


  /*
   * show details
   */

  fastify.get('/user', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      
      const { id } = request.whoiam
      const user = await userInstance.getUser(id)
      reply.send(user)

    } catch (error) {
      reply.send(error)
    }
  })



  /*
  * confirmed user 
  * from email sended
  */

  fastify.get('/user/confirm/:verified_key', {
    //preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      
      const { verified_key } = request.params
      const userConfirmation = await userInstance.confimationEmail(verified_key)

      if(!userConfirmation){  
        reply
        .code(404)
        .send({message:'Usuário não encontrado!'})
      }

      if(userConfirmation.hasOwnProperty('message')){
        reply
        .code(404)
        .send({message:userConfirmation.message})
      }

      reply.send({message:'Usuário ativado com sucesso!'})

    } catch (error) {
      reply.send(error)
    }
  })

  done()
}