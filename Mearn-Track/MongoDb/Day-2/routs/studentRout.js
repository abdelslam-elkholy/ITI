const express = require("express");
const studentController = require("./../contollers/studentController");
const router = express.Router();

router.route("/").post(studentController.createStudent);

module.exports = router;
