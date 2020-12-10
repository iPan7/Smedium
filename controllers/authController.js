const jwt = require('jsonwebtoken');
const {
  insertUserToDb
} = require('../model/userOrm');

const {
  updateUserByLoggedInFromDb
} = require('../model/loggedOrm');

const tokenForUser = (id) => {
  return jwt.sign({
    sub: id,
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

module.exports = {
  signInApi: async (req, res) => {
    try {
      const user = await updateUserByLoggedInFromDb(true, req.user.id);
      res.json(tokenForUser(req.user.id));
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
  signUpApi: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await insertUserToDb(username, password);
      res.json(tokenForUser(user.id));
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
};