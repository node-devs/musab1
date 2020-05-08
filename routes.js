const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  phne: { type: Number },
  email: { type: String },
});

const userModel = mongoose.model("users", userSchema);

router.post("/adduser", function (req, res) {
  const data = req.body;
  new userModel(data).save();
  res.send("usre add to the database");
});

router.get("/allusers", function (req, res) {
  const users = userModel.find().exec();

  users.then(function (data) {
    res.json(data);
  });
  users.catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
