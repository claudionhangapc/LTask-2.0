const utils = require('../utils/project')

class Category {
  constructor (fastify) {
    this.model = fastify.knex('category')
    this.fastify = fastify
  }

  /*
   * get all categories
   */
  async fetch (id) {
    const result = await this.fastify.knex('category').where('user_id',id)
    return result
  }

  /*
   * get single category
   */
  async show (user_id, category_id) {
    let singleCategory = await this.fastify.knex('category')
      .where({
        'user_id': user_id,
        'id': category_id
      })
    
    if(singleCategory.length > 0 ){
      let tasks = await  this.fastify.knex('task').where({
        'category_id': singleCategory[0].id,
      })
      singleCategory[0].tasks = tasks
      return singleCategory[0]
    }

    return singleCategory
    
  }

   /*
   * create single category
   */
   async create (user_id, name) {
    let category

    category = await this.model.returning('*').insert({
      name,
      user_id,
    })

    return category[0]
    
  }

  /*
   * update single category
   */
  async update ( user_id, category_id, name) {
    let category
    category = await this.model.returning('*')
      .where({
        'id':category_id,
        'user_id': user_id,
      }).update({
        name,
      })

      return category[0]
  }


  /*
   * delete single category
   */
  async delete (user_id, category_id) {
      let singleCategory = await this.model
      .where({
        'user_id': user_id,
        'id': category_id
      }).del() 
      return singleCategory
     
  }

}

module.exports = Category