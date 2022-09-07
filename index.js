const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5555;
const db = process.env.MONSTER_MONGO_DB_URI;

mongoose
  .connect(db)
  .then((connection) => console.log("mongodb is connected"))
  .catch((error) => console.log(err));

app.get("/api", function (req, res) {
  res.send({ a: "Welcome!" });
  res.status(200);
});

const server = app.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

module.exports = server;
