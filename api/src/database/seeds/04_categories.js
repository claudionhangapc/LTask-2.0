
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {name: 'programacao','user_id':1},
        {name: 'redes','user_id':1},
        
      ]);
    });
};
