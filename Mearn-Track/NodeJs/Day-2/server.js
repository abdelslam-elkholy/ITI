const app = require("./app");

process.env.PORT = 3000;
process.env.DB = "./db.json";
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App is listening on port: ${port}`));
