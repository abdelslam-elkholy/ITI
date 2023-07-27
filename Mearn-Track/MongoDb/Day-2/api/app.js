const express = require("express");
const app = express();
app.use(express.json());
const studentRouter = require("./routs/studentRout");
const facultyRouter = require("./routs/facultyRout");
const statsRouter = require("./routs/statsRout");

app.use("/api/students", studentRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/stats", statsRouter);
module.exports = app;
