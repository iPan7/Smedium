const router = require('express').Router();

const {
  findAllPostsApi,
  deletePostByIdApi,
  insertPostApi,
  findPostByIdApi,
  findPostsByLoggedInUserApi,
} = require('../../controllers/postController');

const authMiddleware = require('../../middlewares/authorizationMiddleware');

router.use(authMiddleware);

// /posts/userPosts
router.route('/userposts')
    .get(findPostsByLoggedInUserApi);

// /posts
router.route('/')
    .get(findAllPostsApi)
    .post(insertPostApi);

// /posts/:postId
router.route('/:postId')
    .get(findPostByIdApi)
    .delete(deletePostByIdApi);

module.exports = router;
