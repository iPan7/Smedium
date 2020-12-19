const findFriendsByUser = "SELECT friendId, friendName FROM friends WHERE friendId = ?;";

const findFriendById = "SELECT * FROM friends WHERE id = ?;";

const insertFriend = "INSERT INTO friends (friendId) VALUES (?);";

const deleteFriend = "DELETE * FROM friends WHERE id = ?;";

module.exports={
      findFriendsByUser,
      findFriendById,
      insertFriend,
      deleteFriend
}