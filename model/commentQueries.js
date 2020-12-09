const findCommentByPosts = "SELECT commentMaker, content FROM comments WHERE mainPost = ?;";

const insertComments = "INSERT INTO comments (mainPost, content, commentMaker) VALUES (?, ?, ?);";

const updateComments = "UPDATE comments SET content = ? WHERE id = ?;";

const deleteComments = "DELETE FROM comments WHERE id = ?;";

module.exports={
      findCommentByPosts,
      insertComments,
      updateComments,
      deleteComments
}