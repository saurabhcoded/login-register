const express = require("express");
const Router = express.Router();
const DB = require("../models/model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

Router.get("/", (req, res) => {
  console.log("HomePage");
  res.json("welcome to HOMEPAGE of server");
});
Router.post("/register", async (req, res) => {
  const username = req.body.name;
  let password = req.body.password;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      const newRegister = new DB({
        username: username,
        password: hash,
      });
      newRegister.save();
      res.json({ message: "User registered successfully",display:"fade show"});
    });
  });
});
Router.post("/login", async (req, res) => {
  const username = req.body.name;
  const password = req.body.password;
  const newRegister = DB.findOne({
    username: username,
  }).then((result) => {
      if (!result) {
        res.json({ message: "!OOPS SOMETHING WENT WRONG" ,display:"fade show"});
      } else {
        let user = result.username;
        comparePass = result.password;
        bcrypt.compare(password, comparePass, function (err, result) {
          if (result) {
            res.json({ message: `Logged In successfuly`,user:user});
          } else {
            res.json({ message: `Invalid Password`,display:"fade show"});
          }
        });
      }
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = Router;
