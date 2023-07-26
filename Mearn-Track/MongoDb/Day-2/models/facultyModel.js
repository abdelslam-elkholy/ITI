const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  FacultyName: { type: String, required: true, unique: true },
  Address: String,
});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
