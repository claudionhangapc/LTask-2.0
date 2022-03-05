
exports.up = function(knex) {
  return knex.schema.table('user', table=>{
    table.string('verified_key')
    
    table.boolean('verified')
      .notNullable()
      .defaultTo(0)        
  })
};

exports.down = function(knex) {
  return knex.schema.table('user', table => {
    table.dropColumn('verified_key')
    table.dropColumn('verified')
  })
};
