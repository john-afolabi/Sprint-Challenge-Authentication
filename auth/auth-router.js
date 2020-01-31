const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { addUser } = require("../helpers/auth-model");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  // implement registration
  const { username, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, 12);
  const user = {
    username,
    password: passwordHash
  };
  addUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Unable to register user at this time" });
    });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
