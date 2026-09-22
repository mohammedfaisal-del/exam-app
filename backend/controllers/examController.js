const { Exam, Question, Option } = require('../models');
const { processAndSaveImage , deleteImage } = require('../utils/imageProcessor');

// exports.createExam = async (req, res, next) => {
//   try {
//     const { title, description, durationMinutes, startTime, endTime } = req.body;

//     const exam = await Exam.create({
//       title,
//       description,
//       durationMinutes,
//       startTime,
//       endTime,
//       isPublished: false,
//       createdBy: req.user.id
//     });

//     res.status(201).json(exam);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.addQuestion = async (req, res, next) => {
//   try {
//     const { examId } = req.params;
//     const { questionText, points, options } = req.body;

//     const exam = await Exam.findByPk(examId);
//     if (!exam) return res.status(404).json({ message: 'Exam not found' });

//     if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not your exam' });
//     }

//     if (!options || options.length < 2) {
//       return res.status(400).json({ message: 'At least 2 options are required' });
//     }
//     if (!options.some(o => o.isCorrect)) {
//       return res.status(400).json({ message: 'At least one option must be marked correct' });
//     }

//     const question = await Question.create({
//       examId,
//       questionText,
//       points: points || 1
//     });

//     const optionRecords = options.map(opt => ({
//       questionId: question.id,
//       optionText: opt.optionText,
//       isCorrect: opt.isCorrect || false
//     }));
//     await Option.bulkCreate(optionRecords);

//     const fullQuestion = await Question.findByPk(question.id, { include: 'options' });
//     res.status(201).json(fullQuestion);
//   } catch (err) {
//     next(err);
//   }
// };

exports.createExam = async (req, res, next) => {
  try {
    const { title, description, durationMinutes, startTime, endTime, passingPercentage } = req.body;

    const exam = await Exam.create({
      title,
      description,
      durationMinutes,
      startTime,
      endTime,
      isPublished: false,
      createdBy: req.user.id,
      passingPercentage: passingPercentage || 50
    });

    res.status(201).json(exam);
  } catch (err) {
    next(err);
  }
};
exports.addQuestion = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const { questionText, points } = req.body;
    const options = typeof req.body.options === 'string' ? JSON.parse(req.body.options) : req.body.options;

    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    if (!options || options.length < 2) {
      return res.status(400).json({ message: 'At least 2 options are required' });
    }
    if (!options.some(o => o.isCorrect)) {
      return res.status(400).json({ message: 'At least one option must be marked correct' });
    }

    let imageUrl = null;
    if (req.file) {
      imageUrl = await processAndSaveImage(req.file.buffer);
    }

    const question = await Question.create({
      examId,
      questionText,
      points: points || 1,
      imageUrl
    });

    const optionRecords = options.map(opt => ({
      questionId: question.id,
      optionText: opt.optionText,
      isCorrect: opt.isCorrect || false
    }));
    await Option.bulkCreate(optionRecords);

    const fullQuestion = await Question.findByPk(question.id, { include: 'options' });
    res.status(201).json(fullQuestion);
  } catch (err) {
    next(err);
  }
};
exports.publishExam = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    const questionCount = await Question.count({ where: { examId } });
    if (questionCount === 0) {
      return res.status(400).json({ message: 'Cannot publish an exam with no questions' });
    }

    exam.isPublished = true;
    await exam.save();

    res.json({ message: 'Exam published', exam });
  } catch (err) {
    next(err);
  }
};

// exports.deleteExam = async (req, res, next) => {
//   try {
//     const { examId } = req.params;
//     const exam = await Exam.findByPk(examId);
//     if (!exam) return res.status(404).json({ message: 'Exam not found' });

//     if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not your exam' });
//     }

//     await exam.destroy(); // cascades to Questions -> Options, and Submissions -> Answers via your FK constraints
//     res.json({ message: 'Exam deleted' });
//   } catch (err) {
//     next(err);
//   }
// };

exports.deleteExam = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    // Clean up any question images before deleting the exam
    const questions = await Question.findAll({ where: { examId }, attributes: ['imageUrl'] });
    questions.forEach(q => deleteImage(q.imageUrl));

    await exam.destroy(); // cascades to Questions -> Options, and Submissions -> Answers via FK constraints
    res.json({ message: 'Exam deleted' });
  } catch (err) {
    next(err);
  }
};

exports.updateExam = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const { title, description, durationMinutes, startTime, endTime, passingPercentage } = req.body;

    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    if (title !== undefined) exam.title = title;
    if (description !== undefined) exam.description = description;
    if (durationMinutes !== undefined) exam.durationMinutes = durationMinutes;
    if (startTime !== undefined) exam.startTime = startTime;
    if (endTime !== undefined) exam.endTime = endTime;
    if (passingPercentage !== undefined) exam.passingPercentage = passingPercentage;

    await exam.save();
    res.json(exam);
  } catch (err) {
    next(err);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  try {
    const { questionId } = req.params;
    const question = await Question.findByPk(questionId);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    const exam = await Exam.findByPk(question.examId);
    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    deleteImage(question.imageUrl);
    await question.destroy(); // cascades to Options via FK constraint

    res.json({ message: 'Question deleted' });
  } catch (err) {
    next(err);
  }
};

exports.getExamFull = async (req, res, next) => {
  try {
    const exam = await Exam.findByPk(req.params.examId, {
      include: { association: 'questions', include: 'options' }
    });
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    res.json(exam);
  } catch (err) {
    next(err);
  }
};

exports.getAvailableExams = async (req, res, next) => {
  try {
    const exams = await Exam.findAll({
      where: { isPublished: true },
      attributes: ['id', 'title', 'description', 'durationMinutes', 'startTime', 'endTime']
    });
    res.json(exams);
  } catch (err) {
    next(err);
  }
};

// Teacher: list exams THEY created (with submission counts)
exports.getMyExams = async (req, res, next) => {
  try {
    const exams = await Exam.findAll({
      where: { createdBy: req.user.id },
      include: { association: 'submissions', attributes: ['id', 'status', 'score'] }
    });
    res.json(exams);
  } catch (err) {
    next(err);
  }
};

// Teacher/Admin: get all submissions for one of their exams
// exports.getExamResults = async (req, res, next) => {
//   try {
//     const { examId } = req.params;
//     const exam = await Exam.findByPk(examId);
//     if (!exam) return res.status(404).json({ message: 'Exam not found' });

//     if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Not your exam' });
//     }

//     const { Submission } = require('../models');
//     const submissions = await Submission.findAll({
//       where: { examId },
//       include: { association: 'student', attributes: ['id', 'name', 'email'] },
//       order: [['score', 'DESC']]
//     });

//     res.json({ exam: { id: exam.id, title: exam.title }, submissions });
//   } catch (err) {
//     next(err);
//   }
// };

exports.getExamResults = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });

    if (exam.createdBy !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not your exam' });
    }

    const { Submission, Question } = require('../models');

    const questions = await Question.findAll({ where: { examId }, attributes: ['points'] });
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

    const submissions = await Submission.findAll({
      where: { examId },
      include: { association: 'student', attributes: ['id', 'name', 'email'] },
      order: [['score', 'DESC']]
    });

    res.json({
      exam: { id: exam.id, title: exam.title, passingPercentage: exam.passingPercentage, totalPoints },
      submissions
    });
  } catch (err) {
    next(err);
  }
};