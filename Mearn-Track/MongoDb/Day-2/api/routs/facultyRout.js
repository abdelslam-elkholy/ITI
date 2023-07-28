const express = require("express");
const facultyController = require("./../contollers/facultyController");
const router = express.Router();

router
  .route("/")
  .post(facultyController.createFaculty)
  .get(facultyController.getAllFaculties);

module.exports = router;
