const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  CourseID: { type: String, required: true },
  grade: { type: String, required: true },
});

const studentSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  IsFired: { type: Boolean, default: false },
  FacultyID: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
  courses: [courseSchema],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
