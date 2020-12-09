const findUserByIsLoggedQuery = 'SELECT id, username FROM users WHERE isLoggedIn = ?;';
const updateLoggedInUserQuery = 'UPDATE users SET isLoggedIn = ? WHERE id = ?;';

module.exports={
      findUserByIsLoggedQuery,
      updateLoggedInUserQuery
}