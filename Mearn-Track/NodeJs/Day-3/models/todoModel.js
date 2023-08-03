const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Todo Must have Title "],
    trim: true,
    minLength: 2,
    maxLength: 40,
  },
  status: {
    type: String,
    enum: ["todo", "in progress", "done"],
    default: "todo",
  },

  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
