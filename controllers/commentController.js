const { 
  fetchCommentsByPostDb,
  fetchCommentsByIdDb,
  insertCommentDb,
  updateCommentsDb,
  deleteCommentsDb
} = require("../model/commentOrm");

module.exports = {
  findCommentsByPost: async (req, res) => {
    try {
      const mainPostId = req.body.mainPost;
      console.log('Controller 12: find comment', req.body.mainPost);
      let postComments = await fetchCommentsByPostDb(mainPostId);
      return res.json(postComments)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
  },
  findCommentById: async (req, res) => {
    try {
      const commentId = req.body;
      console.log('Controller 12: find comment', req.body);
      let comment = await fetchCommentsByIdDb(commentId);
      return res.json(comment)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
  },
  insertCommentsByPost: async (req, res) => {
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
  updateCommentsByPost: async (req, res) => {
    try {
      const content = req;
      const id = req;
      console.log('Controller: update comment', req);
      let updatedComment = await updateCommentsDb(content, id);
      return res.json(updatedComment)
    } catch (e) {
      res.status(401).json('this is the update comment controller', e);
    }
  },  
  deleteComment: async (req, res) => {
    const id = req.params.commentId;
    console.log('Controller: delete comment', id);
    try {
      const commentToDelete = await fetchCommentsByIdDb(id);
      console.log('comment to delete', commentToDelete.id);
      if (id !== commentToDelete.id) {
        return res.status(401).json('You are not authorized to delete this comment')
      } 
      return res.json('It hit this delete', deletedComment)
    } catch (e) {
      res.status(401).json('this is the delete comment controller', e);
    }
  }
};
