
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_status').insert([
        { name: 'a fazer'},
        { name: 'em progresso'},
        { name: 'feito'},
      ]);
    });
};
