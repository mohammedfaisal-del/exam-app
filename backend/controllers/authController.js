// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models');

// exports.register = async (req, res, next) => {
//   try {
//     const { name, email, password } = req.body;
//     // SECURITY: role is never taken from the client on public registration.
//     // Only 'student' or 'teacher' may self-register; admins are created via seeder only.
//     // let { role } = req.body;
//     // if (!['student', 'teacher'].includes(role)) {
//     //   role = 'student';
//     // }
//     // Public registration only ever creates students - teachers/admins are created by an admin
// const role = 'student';

//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({ name, email, password: hashedPassword, role });

//     res.status(201).json({
//       message: 'User registered successfully',
//       user: { id: user.id, name: user.name, email: user.email, role: user.role }
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       return res.status(401).json({ message: 'بيانات غير صحيحة' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'بيانات غير صحيحة' });
//     }

//     const token = jwt.sign(
//       { id: user.id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '8h' }
//     );

//     res.json({
//       token,
//       user: { id: user.id, name: user.name, email: user.email, role: user.role }
//     });
//   } catch (err) {
//     next(err);
//   }
// };

///////////////////////////////////////

const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // Public registration only ever creates students - teachers/admins are created by an admin
    const role = 'student';

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await User.create({ name, email, password, role });

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'بيانات غير صحيحة' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    next(err);
  }
};