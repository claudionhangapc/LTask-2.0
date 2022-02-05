const PASSWORD_SALT = 10

class User {
  constructor (fastify) {
    this.fastify = fastify
    this.jwt = fastify.jwt
    this.model = fastify.knex('user')
  }

  /*
   * create user
   */

  async siginup (email, password, name) {
    try {
      const bcrypt = require('bcrypt')

      await this.model.insert({
        email,
        password: bcrypt.hashSync(password, PASSWORD_SALT),
        name
      })

      return true
    } catch (error) {
      return error
    }
  }

  /*
   * login usuário
   */

  async login (email, password) {
    try {
      const bcrypt = require('bcrypt')
      const user = await this.model.where({
        email
      })
      
      if ((user.length > 0) && (bcrypt.compareSync(password, user[0].password))) {
        
        const { id, email, name, image_url, } = user[0]
        const payload = { id, email }
        const token = this.jwt.sign(payload)

        return { id, email, name, image_url, token }
      } else {
        return {
          statusCode: 400,
          error: 'erro do cliente',
          message: 'usuário não encontrado'
        }
      }
    } catch (error) {
      return error
    }
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
}

module.exports = User