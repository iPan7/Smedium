const getAllPostsQuery = "SELECT * FROM posts"

const insertPostQuery = 'INSERT INTO posts (title, content) VALUES (?, ?);';
const findAllPostsQuery = 'SELECT * FROM posts;';
const findPostsByIdQuery = 'SELECT * FROM posts WHERE id = ?;';
const findPostsByUserQuery = 'SELECT * FROM posts WHERE userId = ?;';
const deletePostByIdQuery = 'DELETE FROM posts WHERE id = ?;';

module.exports = { getAllPostsQuery }

