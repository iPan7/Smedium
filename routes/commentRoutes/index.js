const router = require('express').Router();

const {
      findCommentsByPost,
      findCommentById,
      insertCommentsByPost,
      updateCommentsByPost,
      deleteComment
} = require('../../controllers/commentController');

// /comments
router.route('/')
      .get(findCommentsByPost);

router.route('/makepost')
      .post(insertCommentsByPost);

router.route('/:commentId')
      .get(findCommentById)
      .delete(deleteComment);

router.route('/update')
      .get(findCommentById)
      .post(updateCommentsByPost);


module.exports = router;