'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('Admin@12345', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'Super Admin',
      email: 'admin@examsite.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { email: 'admin@examsite.com' });
  }
};