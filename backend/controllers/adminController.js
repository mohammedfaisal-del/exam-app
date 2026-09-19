const { User, Exam, Submission } = require('../models');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role', 'createdAt'] });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (Number(userId) === req.user.id) {
      return res.status(400).json({ message: "You can't delete your own account" });
    }
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};

exports.updateUserRole = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;
    if (!['student', 'teacher', 'admin'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = role;
    await user.save();
    res.json({ message: 'Role updated', user: { id: user.id, role: user.role } });
  } catch (err) {
    next(err);
  }
};

exports.getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.findAll({
      include: [
        { association: 'creator', attributes: ['id', 'name', 'email'] },
        { association: 'submissions', attributes: ['id', 'status', 'score'] }
      ]
    });
    res.json(exams);
  } catch (err) {
    next(err);
  }
};

exports.getAllSubmissions = async (req, res, next) => {
  try {
    const submissions = await Submission.findAll({
      include: [
        { association: 'student', attributes: ['id', 'name', 'email'] },
        { association: 'exam', attributes: ['id', 'title'] }
      ]
    });
    res.json(submissions);
  } catch (err) {
    next(err);
  }
};

exports.createTeacher = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await User.create({ name, email, password, role: 'teacher' });

    res.status(201).json({
      message: 'Teacher account created',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    next(err);
  }
};