"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.belongsTo(models.Exam, { foreignKey: "examId", as: "exam" });
      Question.hasMany(models.Option, {
        foreignKey: "questionId",
        as: "options",
        onDelete: "CASCADE",
      });
      Question.hasMany(models.Answer, {
        foreignKey: "questionId",
        as: "answers",
      });
    }
  }
  Question.init(
    {
      questionText: DataTypes.TEXT,
      points: DataTypes.INTEGER,
      examId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Question",
    },
  );
  return Question;
};
