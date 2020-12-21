const { 
  fetchCommentsByPostDb,
  fetchCommentsByIdDb,
  insertCommentDb,
  updateCommentsDb,
  deleteCommentsDb
} = require("../model/commentOrm");

const { fetchUserByIdFromDb } = require('../model/userOrm');


module.exports = {
  findCommentsByPost: async (req, res) => {
    // const {mainPostId} = req.params
    try {
      console.log(req.params.id)
      const mainPostId = req.params.id;
      console.log('Controller 12: find comment', mainPostId);
      let postComments = await fetchCommentsByPostDb(mainPostId);
      return res.json(postComments)
    } catch (e) {
      res.status(401).json('this is the find comment controller', e);
    }
  },
  findCommentById: async (req, res) => {
    try {
      console.log(req.params.id)
      const commentId = req.params.id;
      console.log('Controller 23: find comment by Id', req.params.id);
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
      console.log('Controller 37: insert comment', req.body);
      let post = await insertCommentDb(mainPostId, content, commentMaker);
      return res.json(post)
    } catch (e) {
      res.status(401).json('this is the insert comment controller', e);
    }
  },  
  updateCommentsByPost: async (req, res) => {
    try {
      const content = req.body.content;
      const id = req.params.id;
      console.log('Controller 48: update comment', req.body);
      let updatedComment = await updateCommentsDb(content, id);
      return res.json(updatedComment)
    } catch (e) {
      res.status(401).json('this is the update comment controller', e);
    }
  },  
  deleteComments: async (req, res) => {
    console.log('1st delete cl', req.body)
    const id = req.body['id'];
    console.log('2nd delete. Controller: delete comment', id);
    try {
      const commentToDelete = await fetchCommentsByIdDb(id);
      console.log('controller 60: comment to delete', commentToDelete);
      if (id != commentToDelete.id) {
        return res.status(401).json('You are not authorized to delete this comment')
      } 
      const deletedComment = await deleteCommentsDb(id)
      // return res.json('It hit this delete', deletedComment)
      res.json({success: true})
    } catch (e) {
      // res.status(401).json('this is the delete comment controller', e);
      res.json({success: false})
    }
  }
};
