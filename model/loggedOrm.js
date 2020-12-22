const {
  findUserByIsLoggedQuery,
  updateLoggedInUserQuery,
} = require("./loggedQueries");
const connection = require("../config/connection");

// All ORM functions will be called inside of the Controllers
const fetchUsersByIsLoggedFromDb = async () => {
  try {
    const [rows] = await connection.query(findUserByIsLoggedQuery, true);
    return rows;
  } catch (e) {
    throw new Error(e);
    console.log("This is the loggedOrm");
  }
};
const updateUserByLoggedInFromDb = async (status, id) => {
  try {
    const [rows] = await connection.query(updateLoggedInUserQuery, [
      status,
      id,
    ]);
    return rows;
  } catch (e) {
    throw new Error(e);
    console.log("This is the update loggedOrm");
  }
};

module.exports = {
  fetchUsersByIsLoggedFromDb,
  updateUserByLoggedInFromDb
};
