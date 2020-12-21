const findUserByIsLoggedQuery = 'SELECT id, username FROM users WHERE isLoggedIn = ?;';
const updateLoggedInUserQuery = 'UPDATE users SET isLoggedIn = ? WHERE id = ?;';
const findUserIdByUsername = 'SELECT id FROM users WHERE username = ?;';

module.exports={
      findUserByIsLoggedQuery,
      updateLoggedInUserQuery,
      findUserIdByUsername
}