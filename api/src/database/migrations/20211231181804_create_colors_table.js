
exports.up = function(knex) {
  return knex.schema.createTable('color', (table) => {
    table.increments('id')

    table.string('name').notNullable()

    table.unique('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('color')
};
