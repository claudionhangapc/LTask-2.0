

class Color {
  constructor (fastify) {
    this.model = fastify.knex('color')
    this.fastify = fastify
  }

  /*
   * get all projects
   */
  async fetch () {
    const colors = await this.fastify.knex.select('*').from('color')
    return colors
  }

  /*
   * get single color
   */
  async show ( color_id) {
  
    let singleColor = await this.fastify.knex.select('*').from('color')
      .where({
        'id': color_id
      })
    
    if(singleColor.length>0) return singleColor[0]
    
    return singleColor 
  }


}

module.exports = Color