const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
const port = process.env.PORT || 8080;

mongoose
  .connect(DB)
  .then(() => console.log("Connected To Db Successfully"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log(`App is listening on port: ${port}`));
