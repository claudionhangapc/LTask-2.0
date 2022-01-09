
exports.up = function(knex) {
  return knex.schema.createTable('task', (table) => {
    table.increments('id')

    table.string('name').notNullable()

    table.timestamp('date_created')
        .notNullable()
        .defaultTo(knex.fn.now())

    table.timestamp('date_updated')

    table.timestamp('date_to_start')

    table.boolean('important')

    table.boolean('remeber_me')

    table
        .integer('user_id')
        .unsigned()
        .notNullable();
    table
        .foreign('user_id')
        .references('user.id');

    table
        .integer('category_id')
        .unsigned()
    table
        .foreign('category_id')
        .references('category.id');

    table
        .integer('project_id')
        .unsigned()
    table
        .foreign('project_id')
        .references('project.id')
        .onDelete('CASCADE');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('task')
};