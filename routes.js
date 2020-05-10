const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  phne: { type: Number },
  email: { type: String },
});

const userModel = mongoose.model("users", userSchema);

// saev all data in databaese
router.post("/adduser", function (req, res) {
  const data = req.body;
  new userModel(data).save();
  res.send("usre add to the database");
});
// git all usre in databaese
router.get("/allusers", function (req, res) {
  const users = userModel.find().exec();

  users.then(function (data) {
    res.json(data);
  });
  users.catch(function (err) {
    res.send(err);
  });
});
// update user in databaese
router.put("/updateuser/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const user = userModel.findOneAndUpdate({ _id: id }, { $set: data }).exec();
  user.then(function () {
    res.send("user update successfully");
  });
  user.catch(function (ree) {
    res.send(ree);
  });
});
//delete user in databaese
router.delete("/deleteuser/:id", function (req, res) {
  const id = req.params.id;
  const user = userModel.findOneAndDelete({ _id: id }).exec();
  user.then(function () {
    res.send("user delete successfully");
  });
  user.catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
