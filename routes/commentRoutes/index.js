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

router.route('/findcommentbyid/:id')
      .get(findCommentById)

router.route('/deletecomment')
      .delete(deleteComments);

router.route('/update/:id')
      .put(updateCommentsByPost);


module.exports = router;