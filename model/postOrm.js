const {
    insertPostQuery,
    findAllPostsQuery,
    findPostByIdQuery,
    findPostsByUserQuery,
    deletePostByIdQuery,
//Update post Query
    updatePostByIdQuery,

} = require('./postQueries');
const connection = require('../config/connection');

const findAllPostsFromDb = async () => {
    try {
        const [result] = await connection.query(findAllPostsQuery);
        return result;
    } catch (e) {
        throw new Error(e);
    }
};

const findPostByIdFromDb = async (postId) => {
    try {
        const [result] = await connection.query(findPostByIdQuery, postId);
        return result[0];
    } catch (e) {
        throw new Error(e);
    }
};

const findPostsByUserFromDb = async (userId) => {
    try {
        const [result] = await connection.query(findPostsByUserQuery, userId);
        return result;
    } catch (e) {
        throw new Error(e);
    }
};

const insertPostToDb = async (post, userId) => {
    try {
        const [result] = await connection.query(insertPostQuery, [post.title, post.content, post.image, userId]);
        return await findPostByIdFromDb(result.insertId);
    } catch (e) {
        throw new Error(e);
    }
};

const deletePostByIdFromDb = async (postId) => {
    try {
        // We cant just delete first if we delete first, we can't get the fweet anymore
        const deletedPost = await findPostByIdFromDb(postId);
        await connection.query(deletePostByIdQuery, postId);
        return deletedPost;
    } catch (e) {
        throw new Error(e);
    }
};

//UPDATE QUERY FUNCTION
const updatePostByIdFromDb = async (post) => {
    console.log('ORM', post)
    try {
        const updatePost = await findPostByIdFromDb(post.id);
        await connection.query(updatePostByIdQuery, [post.content, post.title, post.image, post.id]);
        return updatePost;

    } catch (e) {
        throw new Error(e);
    }
};

module.exports = {
    findAllPostsFromDb,
    findPostByIdFromDb,
    findPostsByUserFromDb,
    insertPostToDb,
    deletePostByIdFromDb,
    //UPDATE POST EXPORT (COMMENTS TO REMIND ME I EXPORTED IT)
    updatePostByIdFromDb,
};
