const sharp = require("sharp");
const fs = require("fs");

const user = require('../services/user')
const profile_picture = require('../services/profile_picture')
const schema = require('../schemas/user')
const google = require('../services/google.js')

module.exports = function (fastify, option, done) {
  const userInstance = new user(fastify)
  const googleInstance = new google(fastify)
  const profilePictureInstance = new profile_picture(fastify)

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
    //schema: schema.userLogin
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
  * update user info
  */

  fastify.put('/user/profile/picture', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      
      const user_id = request.whoiam.id
      const {profile_picture_id} = request.body
      const profile_picture = await profilePictureInstance.getProfilePicture(profile_picture_id)
      const updateProfilePicture = await userInstance.setProfilePicture(user_id,profile_picture_id, profile_picture.path)
      //user_id, createProfilePicture.id, createProfilePicture.path
      reply.send(updateProfilePicture)

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
    //schema: schema.userLogin,
    preValidation: [fastify.authenticate],
    preHandler: fastify.upload.single('avatar')
  }, async (request, reply) => {
    try {
      
      const user_id = request.whoiam.id

      let {fieldname, originalname, mimetype, filename, path, destination} = request.file
      const { height, width, left, top} = request.body
      
      const croppedPath = destination + "/cropped-" + filename;
      const cropped = await sharp(path)
      .extract({ width:parseInt(width), height:parseInt(height), left:parseInt(left), top:parseInt(top) }).toFile(croppedPath)

      /* 
      * remove original image 
      * after crop
      */
      fs.rmSync(path, {
        force: true,
        });
      
      // create profile picture

      filename = "cropped-" + filename
      destination = "/" + destination.split('/usr/app/').reverse()[0]
      path = destination + "/"+ filename 

      const createProfilePicture = await profilePictureInstance.create(
        originalname,	filename,	mimetype,	destination, path,	user_id
      )
      
      const updateProfilePicture = await userInstance.setProfilePicture(user_id, createProfilePicture.id, createProfilePicture.path)

      reply.send(updateProfilePicture)

    } catch (error) {
      reply.send(error)
    }
    
  })

   /*
   * show all picture
   */

   fastify.get('/profile', {
    preValidation: [fastify.authenticate]
  },
  async (request, reply) => {
    try {
      
      const { id } = request.whoiam
      const pictures = await profilePictureInstance.getAllProfilePicture(id)
      reply.send(pictures)

    } catch (error) {
      reply.send(error)
    }
  })

  done()
}