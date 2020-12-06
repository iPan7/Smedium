const router = require('express').Router();

const {
      findCommentsByPost,
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
      .get(findCommentsByPost)
      .delete(deleteComment);

router.route('/update')
      .get(updateCommentsByPost)
      .post(updateCommentsByPost);


module.exports = router;