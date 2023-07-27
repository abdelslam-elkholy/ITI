const express = require("express");
const studentController = require("./../contollers/studentController");
const router = express.Router();

router
  .route("/")
  .post(studentController.createStudent)
  .get(studentController.getAllStudents);

module.exports = router;
