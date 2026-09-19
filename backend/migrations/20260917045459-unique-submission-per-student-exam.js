'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('Submissions', {
      fields: ['examId', 'studentId'],
      type: 'unique',
      name: 'unique_submission_per_student_exam'
    });
  },
  async down(queryInterface) {
    await queryInterface.removeConstraint('Submissions', 'unique_submission_per_student_exam');
  }
};