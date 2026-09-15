'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    await queryInterface.changeColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'student'
    });

    await queryInterface.addConstraint('Exams', {
      fields: ['createdBy'],
      type: 'foreign key',
      name: 'fk_exam_creator',
      references: { table: 'Users', field: 'id' },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Questions', {
      fields: ['examId'],
      type: 'foreign key',
      name: 'fk_question_exam',
      references: { table: 'Exams', field: 'id' },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Options', {
      fields: ['questionId'],
      type: 'foreign key',
      name: 'fk_option_question',
      references: { table: 'Questions', field: 'id' },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Submissions', {
      fields: ['examId'],
      type: 'foreign key',
      name: 'fk_submission_exam',
      references: { table: 'Exams', field: 'id' },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Submissions', {
      fields: ['studentId'],
      type: 'foreign key',
      name: 'fk_submission_student',
      references: { table: 'Users', field: 'id' },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Answers', {
      fields: ['submissionId'],
      type: 'foreign key',
      name: 'fk_answer_submission',
      references: { table: 'Submissions', field: 'id' },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    await queryInterface.removeConstraint('Exams', 'fk_exam_creator');
    await queryInterface.removeConstraint('Questions', 'fk_question_exam');
    await queryInterface.removeConstraint('Options', 'fk_option_question');
    await queryInterface.removeConstraint('Submissions', 'fk_submission_exam');
    await queryInterface.removeConstraint('Submissions', 'fk_submission_student');
    await queryInterface.removeConstraint('Answers', 'fk_answer_submission');
  }
};