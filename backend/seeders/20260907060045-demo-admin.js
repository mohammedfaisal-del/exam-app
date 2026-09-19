// // 'use strict';
// // const bcrypt = require('bcryptjs');

// // module.exports = {
// //   async up(queryInterface, Sequelize) {
// //     const hashedPassword = await bcrypt.hash('admin@12345', 10);
// //     await queryInterface.bulkInsert('Users', [{
// //       name: 'Super Admin',
// //       email: 'admin@examsite.com',
// //       password: hashedPassword,
// //       role: 'admin',
// //       createdAt: new Date(),
// //       updatedAt: new Date()
// //     }]);
// //   },

// //   async down(queryInterface) {
// //     await queryInterface.bulkDelete('Users', { email: 'admin@examsite.com' });
// //   }
// // };

// /////////////////////////////////////////

// 'use strict';
// const bcrypt = require('bcryptjs');

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const existing = await queryInterface.sequelize.query(
//       `SELECT id FROM Users WHERE email = 'admin@examsite.com'`,
//       { type: Sequelize.QueryTypes.SELECT }
//     );

//     if (existing.length > 0) {
//       console.log('Admin user already exists, skipping seed.');
//       return;
//     }

//     const hashedPassword = await bcrypt.hash('admin@12345', 10);
//     await queryInterface.bulkInsert('Users', [{
//       name: 'Super Admin',
//       email: 'admin@examsite.com',
//       password: hashedPassword,
//       role: 'admin',
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }]);
//   },

//   async down(queryInterface) {
//     await queryInterface.bulkDelete('Users', { email: 'admin@examsite.com' });
//   }
// };

////////////////////////////

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const existing = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE email = 'admin@examsite.com'`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (existing.length > 0) {
      console.log('Admin user already exists, skipping seed.');
      return;
    }

    await queryInterface.bulkInsert('Users', [{
      name: 'Super Admin',
      email: 'admin@examsite.com',
      password: 'admin@12345',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { email: 'admin@examsite.com' });
  }
};