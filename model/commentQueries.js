const findCommentByPosts = "SELECT commentMaker, content, id FROM comments WHERE mainPost = ?;";

const findCommentById = "SELECT * FROM comments WHERE id = ?;";

const insertComments = "INSERT INTO comments (mainPost, content, commentMaker) VALUES (?, ?, ?);";

const updateComments = "UPDATE comments SET content = ? WHERE id = ?;";

const deleteComments = "DELETE FROM comments WHERE id = ?;";

module.exports={
      findCommentByPosts,
      findCommentById,
      insertComments,
      updateComments,
      deleteComments
}