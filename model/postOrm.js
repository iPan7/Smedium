const {
    insertPostQuery,
    findAllPostsQuery,
    findPostsByIdQuery,
    findPostsByUserQuery,
    deletePostByIdQuery,
    updatePostCompletedById,
    updatePostTextById,
  } = require('./postQueries');
  const connection = require('../config/connection');

  const findAllPostsFromDb = async () => {
    try {
      const [ result ] = await connection.query(findAllPostsQuery);
      return result;
    } catch (e) {
      throw new Error(e);
    }
  };
  
  
  const findPostsByIdFromDb = async (postId) => {
    try {
      const [ result ] = await connection.query(findPostsByIdQuery, postId);
      return result[0];
    } catch (e) {
      throw new Error(e);
    }
  };
  
  const findPostsByUserFromDb = async (userId) => {
    try {
      const [ result ] = await connection.query(findPostsByUserQuery, userId);
      return result;
    } catch (e) {
      throw new Error(e);
    }
  };
  
  
  const insertPostToDb = async (post, userId) => {
    try {
      const [ result ] = await connection.query(insertPostQuery, [post, userId ]);
      return await findPostsByIdFromDb(result.insertId);
    } catch (e) {
      throw new Error(e);
    }
  };
  
  
  const deletePostByIdFromDb = async (postId) => {
    try {
      const deletedPost = await findPostsByIdFromDb(postId);
      await connection.query(deletePostByIdQuery, postId);
      return deletedPost;
    } catch (e) {
      throw new Error(e);
    }
  };

  const updatePostCompletedByIdFromDb = async (postId) => {
    try {
      const [ result ] = await connection.query(updatePostCompletedById, postId);
      return result[0];
    } catch (e) {
      throw new Error(e);
    }
  };

  const updatePostTextByIdFromDb = async (postId) => {
    try {
      const [ result ] = await connection.query(updatePostTextById, postId);
      return result[0];
    } catch (e) {
      throw new Error(e);
    }
  };
  
  module.exports = {
    findAllPostsFromDb,
    findPostsByIdFromDb,
    findPostsByUserFromDb,
    insertPostToDb,
    deletePostByIdFromDb,
    updatePostCompletedByIdFromDb,
    updatePostTextByIdFromDb,
  };
  