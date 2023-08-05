const express = require("express");
const app = express();
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./controllers/errorHandler");
app.use(express.json());

app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);
app.use(errorHandler);
module.exports = app;
