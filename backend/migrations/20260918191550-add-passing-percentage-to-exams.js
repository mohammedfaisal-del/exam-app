'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Exams', 'passingPercentage', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 50
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('Exams', 'passingPercentage');
  }
};