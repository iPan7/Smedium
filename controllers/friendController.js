const {
	fetchFriendsByUserIdDb,
	fetchFriendsByIdDb,
	insertFriendsDb,
	deleteFriendsByIdDb
 } = require('../model/friend/friendOrm');

 module.exports = {
	findFriendsByUser: async (req, res) => {
    try {
      const mainPostId = req.body.mainPost;
      console.log('Controller 12: find comment', req.body.mainPost);
      let postComments = await fetchCommentsByPostDb(mainPostId);
      return res.json(postComments)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
	},
	findFriendById: async (req, res) => {
    try {
      const commentId = req.body;
      console.log('Controller 12: find comment', req.body);
      let comment = await fetchCommentsByIdDb(commentId);
      return res.json(comment)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
	},
	insertFriendByUser: async (req, res) => {
    try {
      // params: { commentId: 'makepost' },
      // query: { main: 'How', comment: 'Am', commentMaker: 'I' }
      const mainPostId = req.body.mainPostId;
      const content = req.body.content;
      const commentMaker = req.body.commentMaker;
      console.log('Controller 26: insert comment', req.body);
      let post = await insertCommentDb(mainPostId, content, commentMaker);
      return res.json(post)
    } catch (e) {
      res.status(401).json('this is the insert comment controller', e);
    }
	},
	deleteFriendById: async (req, res) => {
    try {
      const commentId = req.body;
      console.log('Controller 12: find comment', req.body);
      let comment = await fetchCommentsByIdDb(commentId);
      return res.json(comment)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
	},
 };
