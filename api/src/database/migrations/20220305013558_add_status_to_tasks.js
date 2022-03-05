

exports.up = function(knex) {
  return knex.schema.table('task', table=>{
    table
    .integer('status_id')
    .unsigned()
    .notNullable();
    table
        .foreign('status_id')
        .references('task_status.id');       
      })
};

exports.down = function(knex) {
  return knex.schema.table('task', table => {
    table.dropColumn('status')
  })
};
