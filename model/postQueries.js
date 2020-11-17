const getAllPostsQuery = "SELECT * FROM posts";

const insertPostQuery = 'INSERT INTO posts (title, content, image, userId) VALUES (?, ?, ?, ?);';
const findAllPostsQuery = `SELECT 
                                p.*, u.username
                            FROM
                                posts p
                                    INNER JOIN
                                users u ON p.userId = u.id;`;
const findPostByIdQuery = `SELECT 
                                p.*, u.username
                            FROM
                                posts p
                                    INNER JOIN
                                users u ON p.userId = u.id
                            WHERE
                                p.id = ?;`;
const findPostsByUserQuery = `SELECT 
                                p.*, u.username
                            FROM
                                posts p
                                    INNER JOIN
                                users u ON p.userId = u.id
                            WHERE
                                p.userId = ?;`
const deletePostByIdQuery = 'DELETE FROM posts WHERE id = ?;';

module.exports = {
    getAllPostsQuery,
    insertPostQuery,
    findAllPostsQuery,
    findPostByIdQuery,
    findPostsByUserQuery,
    deletePostByIdQuery
};
