
exports.up = function(knex) {
  return knex.schema.createTable('task_status', (table) => {
    table.increments('id')

    table.string('name').notNullable()
  
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('task_status')
};