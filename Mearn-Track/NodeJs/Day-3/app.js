const express = require("express");
const app = express();
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");
app.use(express.json());

app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);
module.exports = app;
