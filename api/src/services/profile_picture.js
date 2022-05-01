
class ProfilePicture {
  constructor (fastify) {
    this.fastify = fastify
    this.jwt = fastify.jwt
    this.model = fastify.knex('profile_picture')
  }

  /*
   * create profile picture
   */

  async create (originalname,	filename,	mimetype,	destination,	user_id) {
    try {

      const profile_picture = await this.model.returning('*').insert({
        originalname,	
        filename,	
        mimetype,	
        destination,	
        user_id
      })

      return profile_picture
      
    } catch (error) {
      return error
    }
  }


  
}

module.exports = ProfilePicture