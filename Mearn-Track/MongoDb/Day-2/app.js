const express = require("express");
const app = express();
app.use(express.json());
const studentRouter = require("./routs/studentRout");

app.use("/api/students", studentRouter);
module.exports = app;
