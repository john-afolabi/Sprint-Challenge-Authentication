const db = require("../database/dbConfig");

function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => {
      return db("users")
        .where({ id })
        .first();
    });
}

function findUser(filter) {
  return db("users")
    .where(filter)
    .first();
}

module.exports = {
  addUser,
  findUser
};
