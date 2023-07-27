const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  CourseID: { type: Number, required: [true, "Must Have Id"] },
  grade: { type: Number, required: [true, "Must Have Grade"] },
});

const studentSchema = new mongoose.Schema({
  FirstName: { type: String, required: true, trim: true },
  LastName: { type: String, required: true, trim: true },
  IsFired: { type: Boolean, default: false },
  FacultyID: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
  courses: [courseSchema],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
