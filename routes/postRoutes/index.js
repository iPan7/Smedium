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

// /api/posts/userPosts
router.route('/userposts')
    .get(findPostsByLoggedInUserApi);

// /api/posts
router.route('/')
    .get(findAllPostsApi)
    .post(insertPostApi);

// /api/posts/:postId
router.route('/:postId')
    .get(findPostByIdApi)
    .delete(deletePostByIdApi);

module.exports = router;
