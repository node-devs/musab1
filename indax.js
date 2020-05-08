const express = require("express");
const routers = require("./routes");
const mongoose = require("mongoose");
const { db_url, option, port } = require("./config");
const app = express();

const cn = mongoose.connect(db_url, option);
cn.then(function (data) {
  console.log("conated");
});
cn.catch(function (error) {
  console.log(error);
});

app.use(express.json());
app.use(express.urlencoded());
// all routers

app.use(routers);

// hell db branch

app.listen(port);
console.log("server start");
