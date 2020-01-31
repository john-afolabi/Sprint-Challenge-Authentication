const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { addUser, findUser } = require("../helpers/auth-model");
const jwt = require("jsonwebtoken");

function createToken(user) {
  const payload = {
    sub: user.id
  };
  const options = {
    expiresIn: "30d"
  };
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET || "e*SvHc^4t?&jwTwS",
    options
  );
  return token;
}

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
  const { username, password } = req.body;
  findUser({ username }).then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res
          .status(401)
          .json({ message: "Password incorrect. Please check password" });
      }
    } else {
      res
        .status(401)
        .json({ message: "User not registerd. Check your username" });
    }
  });
});

module.exports = router;
