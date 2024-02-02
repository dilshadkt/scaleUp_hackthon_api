const express = require("express");
const app = express();
const dotenv = require("dotenv");
const   Router  = require("./route/pasientRoute");
dotenv.config();

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("connection is good"));

app.use("/api/patients",Router);

app.listen(process.env.PORT, () =>
  console.log(`port is running on ${process.env.PORT}`)
);
