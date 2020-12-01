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

// /post/userPosts
router.route('/userposts')
    .get(findPostsByLoggedInUserApi);

// /post
router.route('/')
    .get(findAllPostsApi)
    .post(insertPostApi);

// /post/:postId
router.route('/:postId')
    .get(findPostByIdApi)
    .delete(deletePostByIdApi);

// post/update/:postId (WORK IN PROGRESS)
router.route('/update/:postId')
    .put(updatePostApi);

module.exports = router;
