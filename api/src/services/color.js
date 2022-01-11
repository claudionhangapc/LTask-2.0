

class Color {
  constructor (fastify) {
    this.model = fastify.knex('color')
    this.fastify = fastify
  }

  /*
   * get all projects
   */
  async fetch () {
    
    const result = await this.model
    return result
  }

  /*
   * get single color
   */
  async show ( color_id) {
  
    let singleColor = await this.model
      .where({
        'id': color_id
      })
    
    if(singleColor.length>0) return singleColor[0]
    
    return singleColor 
  }


}

module.exports = Color