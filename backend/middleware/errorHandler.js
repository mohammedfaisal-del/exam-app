// Centralized error handler — controllers can just `next(err)` instead of repeating try/catch responses
exports.errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      message: 'Validation error',
      errors: err.errors.map(e => e.message)
    });
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
};

exports.notFound = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};