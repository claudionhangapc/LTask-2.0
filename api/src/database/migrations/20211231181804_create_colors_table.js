
exports.up = function(knex) {
  return knex.schema.createTable('color', (table) => {
    table.increments('id')

    table.string('value').notNullable()

    table.string('name')

    table.unique('value')

    table.unique('name')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('color')
};
