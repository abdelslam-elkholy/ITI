const mongoose = require("mongoose");

const coursSchema = new mongoose.Schema({
  CoursId: { type: Number, required: [true, "The Cours Must Have Id "] },
  Grade: { type: String, required: [true, "Must Have Grade"], trim: true },
});

const Cours = mongoose.model("Cours", coursSchema);
module.exports = Cours;
