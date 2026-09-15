const { Exam, Question, Option, Submission, Answer } = require('../models');

exports.startExam = async (req, res, next) => {
  try {
    const { examId } = req.params;
    const studentId = req.user.id;

    const exam = await Exam.findByPk(examId);
if (!exam || !exam.isPublished) {
  return res.status(404).json({ message: 'Exam not available' });
}

const now = new Date();
if (now < new Date(exam.startTime)) {
  return res.status(400).json({ message: `Exam has not started yet. It opens at ${exam.startTime}` });
}
if (now > new Date(exam.endTime)) {
  return res.status(400).json({ message: 'Exam window has closed' });
}

    // const existing = await Submission.findOne({
    //   where: { examId, studentId, status: 'in_progress' }
    // });
    // if (existing) {
    //   return res.status(200).json({ message: 'Resuming existing attempt', submission: existing });
    // }
    const existing = await Submission.findOne({
  where: { examId, studentId, status: 'in_progress' }
});
if (existing) {
  const questions = await Question.findAll({
    where: { examId },
    include: { association: 'options', attributes: ['id', 'optionText'] },
    attributes: ['id', 'questionText', 'points']
  });
  return res.status(200).json({ submission: existing, questions, durationMinutes: exam.durationMinutes });
}

    const alreadyDone = await Submission.findOne({
      where: { examId, studentId, status: 'graded' }
    });
    if (alreadyDone) {
      return res.status(400).json({ message: 'You have already completed this exam' });
    }

    const submission = await Submission.create({
      examId,
      studentId,
      startedAt: new Date(),
      status: 'in_progress'
    });

    const questions = await Question.findAll({
      where: { examId },
      include: { association: 'options', attributes: ['id', 'optionText'] },
      attributes: ['id', 'questionText', 'points']
    });

    res.status(201).json({ submission, questions, durationMinutes: exam.durationMinutes });
  } catch (err) {
    next(err);
  }
};

exports.submitAnswer = async (req, res, next) => {
  try {
    const { submissionId } = req.params;
    const { questionId, selectedOptionId } = req.body;
    const studentId = req.user.id;

    const submission = await Submission.findByPk(submissionId);
    if (!submission || submission.studentId !== studentId) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    if (submission.status !== 'in_progress') {
      return res.status(400).json({ message: 'Exam already submitted' });
    }

   const exam = await Exam.findByPk(submission.examId);
const elapsedMinutes = (Date.now() - new Date(submission.startedAt)) / 60000;
const pastWindow = new Date() > new Date(exam.endTime);

if (elapsedMinutes > exam.durationMinutes || pastWindow) {
  submission.status = 'graded';
  await submission.save();
  return res.status(400).json({ message: 'Time is up, exam auto-closed' });
}

    const existingAnswer = await Answer.findOne({ where: { submissionId, questionId } });
    if (existingAnswer) {
      existingAnswer.selectedOptionId = selectedOptionId;
      await existingAnswer.save();
    } else {
      await Answer.create({ submissionId, questionId, selectedOptionId });
    }

    res.json({ message: 'Answer saved' });
  } catch (err) {
    next(err);
  }
};

exports.finishExam = async (req, res, next) => {
  try {
    const { submissionId } = req.params;
    const studentId = req.user.id;

    const submission = await Submission.findByPk(submissionId, {
      include: { association: 'answers' }
    });
    if (!submission || submission.studentId !== studentId) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    if (submission.status !== 'in_progress') {
      return res.status(400).json({ message: 'Exam already submitted' });
    }

    let totalScore = 0;
    for (const answer of submission.answers) {
      const question = await Question.findByPk(answer.questionId);
      const option = await Option.findByPk(answer.selectedOptionId);
      if (option && option.isCorrect) {
        totalScore += question.points;
      }
    }

    submission.score = totalScore;
    submission.status = 'graded';
    submission.submittedAt = new Date();
    await submission.save();

    res.json({ message: 'Exam submitted', score: totalScore });
  } catch (err) {
    next(err);
  }
};

exports.getMyResults = async (req, res, next) => {
  try {
    const studentId = req.user.id;
    const submissions = await Submission.findAll({
      where: { studentId, status: 'graded' },
      include: { association: 'exam', attributes: ['title'] }
    });
    res.json(submissions);
  } catch (err) {
    next(err);
  }
};