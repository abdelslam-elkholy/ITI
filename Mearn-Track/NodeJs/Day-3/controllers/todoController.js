const Todo = require("./../models/todoModel");

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      message: "created",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "failed",
      err,
    });
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const skip = req.query.skip * 1 || 0;
    const limit = req.query.limit * 1 || (await Todo.countDocuments());

    const todos = await Todo.find().populate("ownerId").skip(skip).limit(limit);
    res.status(200).json({
      message: "success",
      data: {
        data: todos,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: "Not Found",
      err,
    });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) next(err);

    res.status(200).json({
      message: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: "Not Found",
      err,
    });
  }
};
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: "Not Found",
      err,
    });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: "Not Found",
      err,
    });
  }
};
