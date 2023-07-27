const express = require("express");
const facultyController = require("./../contollers/facultyController");
const router = express.Router();

router
  .route("/")
  .post(facultyController.createFaculty)
  .get(facultyController.getAllFaculties);

// router
//   .route("/:id")
//   .get(facultyController.getStudent)
//   .patch(facultyController.updateStudent)
//   .delete(facultyController.deleteStudent);

module.exports = router;
