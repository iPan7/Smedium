const { 
  findCommentByPosts,
  insertComments,
  updateComments,
  deleteComments
} = require("./commentQueries");

const connection = require("../config/connection");

const fetchCommentsByPostDb = async (mainPost) => {
  try {
    const [rows] = await connection.query(findCommentByPosts, mainPost);
    console.log('the fetch orm', rows);
    return rows;
  } catch (e) {
    console.log('this is the fetch commentOrm', e);
    throw new Error(e);
  }
};
const insertCommentDb = async (mainPost, content, commentMaker) => {
  try {
    const [rows] = await connection.query(insertComments, [mainPost, content, commentMaker]);
    console.log('the insert orm', rows);
    return rows;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
const updateCommentsDb = async (content, id) => {
  try {
    const [rows] = await connection.query(updateComments, [content, id]);
    console.log('this is the update commentOrm', rows)
    return rows;
  } catch (e) {
    console.log('this is the update commentOrm', e)
    throw new Error(e);
  }
};
const deleteCommentsDb = async (id) => {
  try {
    const [rows] = await connection.query(deleteComments, id);
    console.log('this is the delete commentOrm', rows)
    return rows;
  } catch (e) {
    throw new Error(e);
    console.log('this is the delete commentOrm')
  }
};

module.exports = {
  fetchCommentsByPostDb,
  insertCommentDb,
  updateCommentsDb,
  deleteCommentsDb
}