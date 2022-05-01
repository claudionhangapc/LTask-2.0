const sharp = require("sharp");

const user = require('../services/user')
const schema = require('../schemas/user')
const google = require('../services/google.js')

module.exports = function (fastify, option, done) {
  const userInstance = new user(fastify)
  const googleInstance = new google(fastify)
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
   * login
   */

  fastify.post('/login/google',  {
    //schema: schema.userLogin
  }, async (request, reply) => {
    try {
      const { code, client_id, redirect_uri } = request.body

      const result = await googleInstance.login(code, client_id, redirect_uri)


      reply.send(result)

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
        .code(401)
        .send({message:userConfirmation.message})
      }

      reply.send({message:'Usuário ativado com sucesso!'})

    } catch (error) {
      reply.send(error)
    }
  })


  /*
  * upload profile 
  * picture
  */

  fastify.post('/profile',  {
    //schema: schema.userLogin
    preHandler: fastify.upload.single('avatar')
  }, async (request, reply) => {
    try {
      
      const {fieldname, originalname, mimetype, filename, path} = request.file
      const { height, width, left, top} = request.body
      const cropped = await sharp(path)
      .extract({ width:parseInt(width), height:parseInt(height), left:parseInt(left), top:parseInt(top) }).toFile(path)
      
      console.log(cropped)
      //console.log(request.file)
      reply.send(request.body)

    } catch (error) {
      reply.send(error)
    }
    
  })

  done()
}