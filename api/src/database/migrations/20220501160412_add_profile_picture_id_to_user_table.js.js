

exports.up = function(knex) {
  return knex.schema.table('user', table=>{
    table
    .integer('profile_picture_id')
    .unsigned()
    table
        .foreign('profile_picture_id')
        .references('profile_picture.id');       
      })
};

exports.down = function(knex) {
  return knex.schema.table('user', table => {
    table.dropColumn('status')
  })
};
