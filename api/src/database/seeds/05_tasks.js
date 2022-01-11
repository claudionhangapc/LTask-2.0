
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { name: 'trabalhando com java', project_id:'1', user_id:'1'},
    
      ]);
    });
};