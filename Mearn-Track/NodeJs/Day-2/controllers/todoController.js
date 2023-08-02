const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

const writeToDb = (file) => {
  fs.writeFileSync("./db.json", JSON.stringify(file));
};

exports.createTodo = async (req, res, next) => {
  try {
    const todo = req.body;
    todo.id = data.length ? data[data.length - 1].id + 1 : 1;

    res.status(200).json({
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
  try {
    res.status(200).json({
      message: "success",
      data: {
        data,
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
  const { id } = req.params;
  const todo = data.find((el) => el.id == id);

  if (todo) {
    res.status(200).json({
      message: "success",
      data: {
        data,
      },
    });
    return;
  }

  res.status(404).json({
    message: "Not Found",
    err,
  });
};
