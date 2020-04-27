const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const chats = [];

app.get("/chats", function (req, res, next) {
  res.json(chats);
});

app.post("/addChat", function (req, res) {
  chats.push(req.body);
  res.send("chat added successfuly");
});

app.listen(1234);
console.log("server start");
