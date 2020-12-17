const router = require('express').Router();

const {
      findCommentsByPost,
      findCommentById,
      insertCommentsByPost,
      updateCommentsByPost,
      deleteComments
} = require('../../controllers/commentController');

// /comments
router.route('/')
      .get(findCommentsByPost);

router.route('/makecomment')
      .post(insertCommentsByPost);

router.route('/findcommentbyid')
      .get(findCommentById)

router.route('/deletecomment')
      .delete(deleteComments);

router.route('/update')
      .post(updateCommentsByPost);


module.exports = router;