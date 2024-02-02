const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection is good"));

app.listen(process.env.PORT, () =>
  console.log(`port is running on ${process.env.PORT}`)
);
