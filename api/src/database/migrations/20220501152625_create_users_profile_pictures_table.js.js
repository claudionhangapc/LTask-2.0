

exports.up = function(knex) {
  return knex.schema.createTable('profile_picture', (table) => {
    table.increments('id')

    table.string('originalname').notNullable()

    table.string('filename').notNullable()

    table.string('mimetype').notNullable()

    table.string('destination').notNullable()

    table.string('path').notNullable()

    table
        .integer('user_id')
        .unsigned()
        .notNullable();
    table
        .foreign('user_id')
        .references('user.id');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('profile_picture')
};