
class ProfilePicture {
  constructor (fastify) {
    this.fastify = fastify
    this.jwt = fastify.jwt
    this.model = fastify.knex('profile_picture')
  }

   /*
   * get profile picture
   * from user id
   */

  async getProfilePicture (id){
    let singlePicture = await this.fastify.knex.select('id','originalname','filename','mimetype','destination','path').from('profile_picture')
      .where({
        id
      })
    if(singlePicture.length>0) return singlePicture[0]
    
    return singlePicture 
   
  }

  /*
   * create profile picture
   */

  async create (originalname,	filename,	mimetype,	destination, path,	user_id) {

      const profile_picture = await this.model.returning('*').insert({
        originalname,	
        filename,	
        mimetype,	
        destination,
        path,	
        user_id
      })

      return profile_picture[0]
   
  }


  
}

module.exports = ProfilePicture