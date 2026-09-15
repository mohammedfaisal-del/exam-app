'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Submission.belongsTo(models.Exam, { foreignKey: 'examId', as: 'exam' });
  Submission.belongsTo(models.User, { foreignKey: 'studentId', as: 'student' });
  Submission.hasMany(models.Answer, { foreignKey: 'submissionId', as: 'answers', onDelete: 'CASCADE' });
}
  }
  Submission.init({
    examId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    startedAt: DataTypes.DATE,
    submittedAt: DataTypes.DATE,
    score: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Submission',
  });
  return Submission;
};