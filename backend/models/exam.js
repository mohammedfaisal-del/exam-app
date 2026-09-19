'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate(models) {
  Exam.belongsTo(models.User, { foreignKey: 'createdBy', as: 'creator' });
  Exam.hasMany(models.Question, { foreignKey: 'examId', as: 'questions', onDelete: 'CASCADE' });
  Exam.hasMany(models.Submission, { foreignKey: 'examId', as: 'submissions' });
}
  }
  Exam.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    durationMinutes: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    isPublished: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    passingPercentage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exam',
  });
  return Exam;
};