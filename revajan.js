const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log(req.ip);
  console.log(req.protocol);
  console.log(req.params);
  console.log(req.query);
  console.log(req.hostname);
  console.log(req.header);
  next();
});

app.get("/", function (req, res) {
  res.send("walcame");
});
app.listen(1122);

console.log("sarver start");
