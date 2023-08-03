const fs = require("fs");
const readData = () => JSON.parse(fs.readFileSync("./db.json", "utf-8"));
const data = readData();
const writeToDb = (file) => {
  fs.writeFileSync("./db.json", JSON.stringify(file));
};

exports.createTodo = async (req, res, next) => {
  try {
    const data = readData();
    const todo = req.body;
    todo.id = data.length ? data[data.length - 1].id + 1 : 1;

    res.status(201).json({
      message: "created",
      data: {
        todo,
      },
    });

    data.push(todo);
    writeToDb(data);
  } catch (err) {
    res.status(400).json({
      message: "failed",
      err,
    });
  }
};

exports.getTodos = async (req, res, next) => {
  const data = readData();
  const skip = req.query.skip * 1 || 0;
  const limit = req.query.limit * 1 || data.length;
  const pagenation = data.splice(skip, limit);
  try {
    res.status(200).json({
      message: "success",
      data: {
        data: pagenation,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: "Not Found",
      err,
    });
  }
};

exports.getTodo = (req, res, next) => {
  const data = readData();
  const { id } = req.params;
  const todo = data.find((el) => el.id == id);

  if (todo) {
    res.status(200).json({
      message: "success",
      data: {
        todo,
      },
    });
    return;
  }

  res.status(404).json({
    message: "Not Found",
    err,
  });
};

exports.updateTodo = (req, res, next) => {
  const data = readData();
  const { id } = req.params;
  const { title } = req.body;

  const todoIndex = data.findIndex((el) => el.id == id);

  if (todoIndex != -1) {
    data[todoIndex].title = title;
    writeToDb(data);
    res.status(200).json({
      message: "success",
      data: {
        todo: data[todoIndex],
      },
    });
    return;
  }

  res.status(404).json({
    message: "Not Found",
    err,
  });
};

exports.deleteTodo = (req, res, next) => {
  const data = readData();
  const { id } = req.params;

  const todoIndex = data.findIndex((el) => el.id == id);

  if (todoIndex != -1) {
    res.status(200).json({
      message: "success",
      data: {
        todo: data[todoIndex],
      },
    });
    data.splice(todoIndex, 1);
    writeToDb(data);
    return;
  }

  res.status(404).json({
    message: "Not Found",
    err,
  });
};
