const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5555;

app.get("/", function (req, res) {
  res.send("Welcome!");
  res.status(200);
});

const server = app.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

module.exports = server;
