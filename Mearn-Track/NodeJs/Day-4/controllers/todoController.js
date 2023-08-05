const Todo = require("./../models/todoModel");
const catchAsync = require("./../utils/catchAsync");
const { AppError } = require("./errorHandler");
exports.createTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({
    message: "created",
    data: {
      todo,
    },
  });
});

exports.getTodos = catchAsync(async (req, res, next) => {
  const skip = req.query.skip * 1 || 0;
  const limit = req.query.limit * 1 || (await Todo.countDocuments());

  const todos = await Todo.find().populate("ownerId").skip(skip).limit(limit);
  if (!todos)
    return next(
      AppError(`There Is no Todo With The Id ${req.params.id}`, "404")
    );

  res.status(200).json({
    message: "success",
    data: {
      data: todos,
    },
  });
});

exports.getTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo)
    return next(
      AppError(`There Is no Todo With The Id ${req.params.id}`, "404")
    );

  res.status(200).json({
    message: "success",
    data: {
      todo,
    },
  });
});
exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!todo)
    return next(
      AppError(`There Is no Todo With The Id ${req.params.id}`, "404")
    );
  res.status(200).json({
    message: "success",
    data: {
      todo,
    },
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo)
    return next(
      AppError(`There Is no Todo With The Id ${req.params.id}`, "404")
    );
  res.status(200).json({
    message: "success",
    data: {
      todo,
    },
  });
});
