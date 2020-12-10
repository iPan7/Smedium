const {
      findFriendsByUser,
      findFriendById,
      insertFriend,
      deleteFriend
} = require('./friendQueries');

const fetchFriendsByUserIdDb = async (mainPost) => {
      try {
        const [rows] = await connection.query(findFriendsByUser, mainPost);
        console.log('the fetch orm', rows);
        return rows;
      } catch (e) {
        console.log('this is the fetch friendOrm', e);
        throw new Error(e);
      }
 };
 const fetchFriendsByIdDb = async (mainPost) => {
      try {
        const [rows] = await connection.query(findFriendById, mainPost);
        console.log('the fetch orm', rows);
        return rows;
      } catch (e) {
        console.log('this is the fetch friendsOrm', e);
        throw new Error(e);
      }
 };
 const insertFriendsDb = async (mainPost) => {
      try {
        const [rows] = await connection.query(insertFriend, mainPost);
        console.log('the fetch orm', rows);
        return rows;
      } catch (e) {
        console.log('this is the insert friendOrm', e);
        throw new Error(e);
      }
 };
 const deleteFriendsByIdDb = async (mainPost) => {
      try {
        const [rows] = await connection.query(deleteFriend, mainPost);
        console.log('the fetch orm', rows);
        return rows;
      } catch (e) {
        console.log('this is the delete friendOrm', e);
        throw new Error(e);
      }
 };

 module.exports = {
	fetchFriendsByUserIdDb,
	fetchFriendsByIdDb,
	insertFriendsDb,
	deleteFriendsByIdDb
 };