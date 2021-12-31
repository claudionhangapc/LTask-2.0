
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')

    table.string('name').notNullable()

    table.string('email').notNullable()

    table.string('password').notNullable()

    table.string('image_url')

    table.unique('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
