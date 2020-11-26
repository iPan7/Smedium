const router = require('express').Router();

const {
  findAllPostsApi,
  deletePostByIdApi,
  insertPostApi,
  findPostByIdApi,
  findPostsByLoggedInUserApi,
//    UPDATE POST
  updatePostApi,

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

// api/update post (WORK IN PROGRESS)
router.route('/:postId')
    .get(findPostByIdApi)
    .put(updatePostApi);

module.exports = router;
