const utils = require('../utils/user')
const email = require('./email')
const PASSWORD_SALT = 10

class User {
  constructor (fastify) {
    this.fastify = fastify
    this.jwt = fastify.jwt
    this.model = fastify.knex('user')
    this.emailService =  new email(fastify)
  }

  /*
   * create user
   */

  async siginup (email, password, name) {
    try {
      const bcrypt = require('bcrypt')
      const verified_key = utils.randString()
      
      await this.model.insert({
        email,
        password: bcrypt.hashSync(password, PASSWORD_SALT),
        name,
        verified_key
      })

      this.emailService.signUp(email, name, verified_key)

      return {
        message:'Usuário criado com sucesso! Por favor verifica o teu email '
            }
    } catch (error) {
      return error
    }
  }


  async siginupByGoogleLogin (email, password, name) {
    
      const bcrypt = require('bcrypt')
      const verified_key = utils.randString()
      
      const result = await this.model.insert({
        email,
        password: bcrypt.hashSync(password, PASSWORD_SALT),
        name,
        verified_key,
        verified:true
      })

      return result
  }

  /*
   * login usuário
   */

  async login (email, password) {
    
      const bcrypt = require('bcrypt')
      const user =  await this.fastify.knex.select('*').from('user')
      .where({
        email
      })
      
      if ((user.length > 0) && (user[0].verified!==true)) {
        return {message:'Conta pendente. Por favor verifica o teu email' }
      }

      if ((user.length > 0) && (bcrypt.compareSync(password, user[0].password))) {
        
        const { id, email, name, profile_picture_id, } = user[0]
        const payload = { id, email }
        const token = this.jwt.sign(payload)

        return { id, email, name, profile_picture_id, token }
      }
      
     return 0

  }

  async loginOnlyByEmail(email){

    const bcrypt = require('bcrypt')
      const user =  await this.fastify.knex.select('*').from('user')
      .where({
        email
      })
    
      if (user.length > 0) {
        
        const { id, email, name, profile_picture_id, } = user[0]
        const payload = { id, email }
        const token = this.jwt.sign(payload)

        return { id, email, name, profile_picture_id, token }
      }
      
     return 0

  }

  async getUser(id){
    let singleUser = await this.fastify.knex.select('id','name','email','profile_picture_id').from('user')
      .where({
        id
      })
    if(singleUser.length>0) return singleUser[0]
    
    return singleUser 
   
  }

  async fetchUserByEmail(email){
    let singleUser = await this.fastify.knex.select('id','name','email','profile_picture_id').from('user')
      .where({
        email
      })
    if(singleUser.length>0) return singleUser
    
    return []
  }
  
  async fetch () {
    const user = await this.model

    return user
  }

  async confimationEmail(verified_key){
    let singleUser = await this.fastify.knex.select('*').from('user')
      .where({
        verified_key,
      })

    if(singleUser.length==0) return false
    
    if(singleUser[0].verified==true){
      return{
        message:'Usuário já ativo!'
      }
    }

    await this.fastify.knex('user')
      .where({
        id:singleUser[0].id
    }).update({
      verified:true
    })
    
    return true
  }

  async setProfilePicture(user_id, profile_picture_id, path){

      const singleUser = await this.model.returning('*')
      .where({'id':user_id})
      .update({
        'profile_picture_id': profile_picture_id
      })

      const { id, email, name} = singleUser[0]
      
      return { id, email, name, profile_picture_id, path}

    
  }
}

module.exports = User