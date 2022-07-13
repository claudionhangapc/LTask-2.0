const bcrypt = require('bcrypt')
const PASSWORD_SALT = 10

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { name:'claudio nhanga', email: 'emaildteste@gmail.com', password: bcrypt.hashSync('12#rer', PASSWORD_SALT), verified:true},
        { name:'claudio nhanga', email: 'emaildteste2@gmail.com', password: bcrypt.hashSync('12#6565rer', PASSWORD_SALT), verified:true},
      ]);
    });
};
