const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { validate } = require("../middleware/validate");
const { verifyToken, requireRole } = require("../middleware/auth");
const {
  createExam,
  addQuestion,
  publishExam,
  getExamFull,
  getAvailableExams,
  getMyExams,
  getExamResults,
} = require("../controllers/examController");

router.get("/", verifyToken, getAvailableExams);
router.get("/mine", verifyToken, requireRole("teacher", "admin"), getMyExams);

router.post(
  "/",
  verifyToken,
  requireRole("teacher", "admin"),
  [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("durationMinutes")
      .isInt({ min: 1 })
      .withMessage("Duration must be a positive number"),
    body("startTime").isISO8601().withMessage("Valid startTime is required"),
    body("endTime").isISO8601().withMessage("Valid endTime is required"),
  ],
  validate,
  createExam
);

router.post(
  "/:examId/questions",
  verifyToken,
  requireRole("teacher", "admin"),
  addQuestion
);
router.patch(
  "/:examId/publish",
  verifyToken,
  requireRole("teacher", "admin"),
  publishExam
);
router.get(
  "/:examId/full",
  verifyToken,
  requireRole("teacher", "admin"),
  getExamFull
);
router.get(
  "/:examId/results",
  verifyToken,
  requireRole("teacher", "admin"),
  getExamResults
);
module.exports = router;
