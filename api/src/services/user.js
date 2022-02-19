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
        
        const { id, email, name, image_url, } = user[0]
        const payload = { id, email }
        const token = this.jwt.sign(payload)

        return { id, email, name, image_url, token }
      }
      
     return 0

  }

  async getUser(id){
    let singleUser = await this.fastify.knex.select('id','name','email','image_url').from('user')
      .where({
        id
      })
    if(singleUser.length>0) return singleUser[0]
    
    return singleUser 
   
  }

  async fetch () {
    const user = await this.model

    return user
  }

  async confimationEmail(verified_key){
    let singleUser = await this.fastify.knex.select('id','verified_key').from('user')
      .where({
        verified_key,
        verified:false
      })

    if(singleUser.length==0) return false

    await this.fastify.knex('user')
      .where({
        id:singleUser[0].id
    }).update({
      verified:true
    })
    
    return true
  }
}

module.exports = User