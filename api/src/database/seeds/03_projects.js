
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Trabalhando com java', user_id:'1',color_id:'1'},
        {name: 'Css e Html ', user_id:'1',color_id:'1'},
        {name: 'Javascript e novas ', user_id:'1',color_id:'1'}
       
      ]);
    });
};
