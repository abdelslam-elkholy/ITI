const express = require("express");
const studentController = require("./../contollers/studentController");
const router = express.Router();

router
  .route("/")
  .post(studentController.createStudent)
  .get(studentController.getAllStudents);

router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
