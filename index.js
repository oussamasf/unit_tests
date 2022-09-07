const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5555;

app.get("/api", function (req, res) {
  res.send({ a: "Welcome!" });
  res.status(200);
});

const server = app.listen(PORT, function () {
  console.log("listening on port " + PORT);
});

module.exports = server;
