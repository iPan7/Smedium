const getAllPostsQuery = "SELECT * FROM posts";

const insertPostQuery = 'INSERT INTO posts (title, content, image, userId) VALUES (?, ?, ?, ?);';
const findAllPostsQuery = `SELECT 
                                p.*, u.username
                            FROM
                                smedium_db.posts p
                                    INNER JOIN
                                users u ON p.userId = u.id`;
const findPostsByIdQuery = 'SELECT * FROM posts WHERE id = ?;';
const findPostsByUserQuery = 'SELECT * FROM posts WHERE userId = ?;';
const deletePostByIdQuery = 'DELETE FROM posts WHERE id = ?;';

module.exports = {
    getAllPostsQuery,
    insertPostQuery,
    findAllPostsQuery,
    findPostsByIdQuery,
    findPostsByUserQuery,
    deletePostByIdQuery
};
