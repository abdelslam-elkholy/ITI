const express = require("express");
const app = express();
app.use(express.json());
const studentRouter = require("./routs/studentRout");
const facultyRouter = require("./routs/facultyRout");

app.use("/api/students", studentRouter);
app.use("/api/faculty", facultyRouter);
module.exports = app;
