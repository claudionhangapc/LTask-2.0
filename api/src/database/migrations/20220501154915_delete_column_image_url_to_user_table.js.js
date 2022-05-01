
exports.up = function(knex) {
  return knex.schema.table('user', function (table) {
    table.dropColumn('image_url');
  });
};

exports.down = function(knex) {
  return knex.schema.table('user', table => {
    table.string('image_url')
  })
};
