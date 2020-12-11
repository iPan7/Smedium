const findFriendsByUser = "SELECT friendId FROM friends WHERE  = ?;";

const findFriendById = "SELECT * FROM friends WHERE id = ?;";

const insertFriend = "INSERT INTO friends (friendId, content) VALUES (?, ?);";

const deleteFriend = "DELETE * FROM friends WHERE id = ?;";

module.exports={
      findFriendsByUser,
      findFriendById,
      insertFriend,
      deleteFriend
}