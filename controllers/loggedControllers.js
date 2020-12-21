const {
      fetchUsersByIsLoggedFromDb,
      findUserIdByUsernameFromDb,
    } = require("../model/loggedOrm");
    
    module.exports = {
      findUsersByLoggedInUserApi: async (req, res) => {
        try {
          let loggedUsers = await fetchUsersByIsLoggedFromDb();
          return res.json(loggedUsers);
        } catch (e) {
          res.status(401).json(e);
        }
      },
      findUserIdByUsernameApi: async (req, res) => {
        try {
          console.log(req.params.username)
          const username = req.params.username;
          let userId = await findUserIdByUsernameFromDb(username);
          return res.json(userId);
        } catch (e) {
          res.status(401).json(e);
        }
      }

}