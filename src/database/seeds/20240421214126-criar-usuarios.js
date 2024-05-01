const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Jorge Cleber Arnaldo',
          email: 'jorgecleber33@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'João Batista Silvio',
          email: 'joaobat2313@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Jair Custodio Mendes',
          email: 'jaircm@gmail.com',
          password_hash: await bcryptjs.hash('123456A', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() { /** */ },
};
