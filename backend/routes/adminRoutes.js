const express = require('express');
const router = express.Router();
const { verifyToken, requireRole } = require('../middleware/auth');
const {
  getAllUsers,
  deleteUser,
  updateUserRole,
  getAllExams,
  getAllSubmissions,
  createTeacher
} = require('../controllers/adminController');

router.use(verifyToken, requireRole('admin'));

router.get('/users', getAllUsers);
router.delete('/users/:userId', deleteUser);
router.patch('/users/:userId/role', updateUserRole);
router.get('/exams', getAllExams);
router.get('/submissions', getAllSubmissions);
router.post('/teachers', createTeacher);

module.exports = router;