
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('color').del()
    .then(function () {
      // Inserts seed entries
      return knex('color').insert([
        {value: '#fff', name: 'branco'},
        {value: '#000', name: 'preto'},
      ]);
    });
};
