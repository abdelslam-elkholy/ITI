const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const dbConnect = async () => {
  try {
    await mongoose.connect(DB);
    console.log("connected To Db ");
  } catch (error) {
    console.log(error);
  }
};

dbConnect();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening From Port ${port}`);
});
