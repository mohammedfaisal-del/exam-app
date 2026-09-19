'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.addConstraint('Answers', {
      fields: ['submissionId', 'questionId'],
      type: 'unique',
      name: 'unique_answer_per_submission_question'
    });
  },
  async down(queryInterface) {
    await queryInterface.removeConstraint('Answers', 'unique_answer_per_submission_question');
  }
};