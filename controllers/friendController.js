const {
	fetchFriendsByUserIdDb,
	fetchFriendsByIdDb,
	insertFriendsDb,
	deleteFriendsByIdDb
 } = require('../model/friend/friendOrm');

 const {
  fetchUserByIdFromDb
 } = require('../model/userOrm')

 module.exports = {
	findFriendsByUser: async (req, res) => {
    try {
      const userId = req.body.id
      console.log("User id", req.body)
      let user = await fetchUserByIdFromDb(userId)
      console.log('Controller 12: find friend', user);
      let friends = await fetchFriendsByIdDb(user.id);
      return res.json(friends)
    } catch (e) {
      res.status(401).json('this is the find friend controller', e);
    }
	},
	findFriendById: async (req, res) => {
    try {
      const commentId = req.body;
      console.log('Controller 12: find friend', req.body);
      let friend = await fetchCommentsByIdDb(commentId);
      return res.json(friend)
    } catch (e) {
      res.status(401).json('this is the find friend controller', e);
    }
	},
	insertFriendByUser: async (req, res) => {
    try {
      const user = req.body.id
      console.log('Controller 26: insert friend', req.body);
      let post = await this.insertFriendByUser(mainPostId, content, commentMaker);
      return res.json(post)
    } catch (e) {
      res.status(401).json('this is the insert friend controller', e);
    }
	},
	deleteFriendById: async (req, res) => {
    try {
      const commentId = req.body;
      console.log('Controller 12: find friend', req.body);
      let friend = await fetchCommentsByIdDb(commentId);
      return res.json(friend)
    } catch (e) {
      res.status(401).json('this is the find friend controller', e);
    }
	},
 };
