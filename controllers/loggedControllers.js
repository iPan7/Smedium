const {
      fetchUsersByIsLoggedFromDb
    } = require("../model/loggedOrm");
    
    module.exports = {
      findUsersByLoggedInUserApi: async (req, res) => {
        try {
          let loggedUsers = await fetchUsersByIsLoggedFromDb();
          return res.json(loggedUsers);
        } catch (e) {
          res.status(401).json(e);
        }
      }
}