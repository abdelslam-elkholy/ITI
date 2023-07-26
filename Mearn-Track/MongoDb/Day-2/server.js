const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
