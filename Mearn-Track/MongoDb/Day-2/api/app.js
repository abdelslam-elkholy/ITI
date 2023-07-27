const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const studentRouter = require("./routs/studentRout");
const facultyRouter = require("./routs/facultyRout");
const statsRouter = require("./routs/statsRout");

app.use("/api/students", studentRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/stats", statsRouter);
module.exports = app;
