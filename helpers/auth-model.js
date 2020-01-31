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

module.exports = {
  addUser
};
