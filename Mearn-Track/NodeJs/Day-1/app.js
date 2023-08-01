const fs = require("fs");
const { argv } = require("process");

const data = JSON.parse(fs.readFileSync("./app.json", "utf-8"));
// console.log(data);

const writeToFile = (file) => {
  JSON.stringify(fs.writeFileSync("./app.json", JSON.stringify(file)));
};

const [, , command, title] = process.argv;

if (command.toLowerCase() == "add") {
  const todo = {
    id: data.length > 0 ? data[length - 1].id + 1 : 1,
    title,
    status: "todo",
  };
  data.push(todo);
  writeToFile(data);
} else if (command.toLocaleLowerCase() == "list") {
  data.map((todo) => console.log(todo));
} else if (command.toLocaleLowerCase() == "edite") {
  const index = data.findIndex((todo) => todo.id == argv[3]);

  if (index == -1) {
    return console.log("Ther Is No ToDo With This Id");
  } else if (argv[4] == "-s" && argv[6] == "-t") {
    data[index].title = argv[7];
    data[index].status = argv[5];
    writeToFile(data);
    return;
  } else if (argv[4] == "-s") {
    data[index].status = argv[5];
    writeToFile(data);
    return;
  } else if (argv[4] == "-t") {
    data[index].title = argv[5];

    writeToFile(data);
    return;
  }
  const [, , , id, title] = argv;

  data[index].title = title;
  writeToFile(data);
} else if (command.toLocaleLowerCase() == "delete") {
  const id = argv[3];
  const index = data.findIndex((todo) => todo.id == id);

  if (index == -1) {
    return console.log("Ther Is No ToDo With This Id");
  }

  data.splice(index, 1);
  writeToFile(data);
}
