
exports.up = function(knex) {
  return knex.schema.createTable('category', (table) => {
    table.increments('id')

    table
        .integer('user_id')
        .unsigned()
        .notNullable();
    table
        .foreign('user_id')
        .references('user.id');
        
    table.string('name').notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('category')
};