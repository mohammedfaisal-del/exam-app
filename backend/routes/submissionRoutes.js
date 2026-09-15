const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const {
  startExam,
  submitAnswer,
  finishExam,
  getMyResults
} = require('../controllers/submissionController');

router.post('/exams/:examId/start', verifyToken, requireRole('student'), startExam);
router.post('/:submissionId/answer', verifyToken, requireRole('student'), submitAnswer);
router.post('/:submissionId/finish', verifyToken, requireRole('student'), finishExam);
router.get('/my-results', verifyToken, requireRole('student'), getMyResults);

module.exports = router;