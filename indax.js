const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome" + req.query.name);
});

// hell db branch

app.listen(1238);
console.log("server start");
