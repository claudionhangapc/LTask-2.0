
exports.up = function(knex) {
  return knex.schema.createTable('project', (table) => {
    table.increments('id')

    table.string('name').notNullable()

    table.timestamp('date_created')
        .notNullable()
        .defaultTo(knex.fn.now())

    table.timestamp('date_updated')

    table
        .integer('user_id')
        .unsigned()
        .notNullable();
    table
        .foreign('user_id')
        .references('user.id');

    table
        .integer('color_id')
        .unsigned()
        .notNullable();
    table
        .foreign('color_id')
        .references('color.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('project')
};