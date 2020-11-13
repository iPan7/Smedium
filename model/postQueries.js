
const insertPostQuery = 'INSERT INTO posts (title, content, image, userId,) VALUES (?, ?, ?, ?);';
const findAllPostsQuery = 'SELECT * FROM posts;';
const findPostsByIdQuery = 'SELECT * FROM posts WHERE id = ?;';
const findPostsByUserQuery = 'SELECT * FROM posts WHERE userId = ?;';
const deletePostByIdQuery = 'DELETE FROM posts WHERE id = ?;';

const updatePostCompletedById = 'UPDATE posts SET completed = ? WHERE id = ?;';
const updatePostTextById = 'UPDATE posts SET post = ? WHERE id = ?;';

module.exports = {
    getAllPostsQuery,
    insertPostQuery,
    findAllPostsQuery,
    findPostsByIdQuery,
    findPostsByUserQuery,
    deletePostByIdQuery,
};