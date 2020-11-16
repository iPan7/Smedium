const {
  deletePostByIdFromDb,
  findAllPostsFromDb,
  findPostByIdFromDb,
  findPostsByUserFromDb,
  insertPostToDb
} = require("../model/postOrm");

module.exports = {
  findPostsByLoggedInUserApi: async (req, res) => {
    try {
      const userPosts = await findPostsByUserFromDb(req.user.id);
      return res.json(userPosts);
    } catch (e) {
      console.log('testing', e);
      res.status(401).json(e);
    }
  },
  findPostByIdApi: async (req, res) => {
    const {postId} = req.params;
    try {
      const post = await findPostByIdFromDb(postId);
      if (!post) {
        return res.status(404).send('No post found with that id');
      }
      return res.json(post);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  findAllPostsApi: async (req, res) => {
    try {
      const posts = await findAllPostsFromDb();
      return res.json(posts);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  deletePostByIdApi: async (req, res) => {
    const {postId} = req.params;
    try {
      const postToDelete = await findPostByIdFromDb(postId);
      if (postToDelete.userId !== req.user.id) {
        return res.status(401).send('You are unauthorized to delete this post');
      }
      const deletedPost = await deletePostByIdFromDb(postId);
      return res.json(deletedPost);
    } catch (e) {
      res.status(401).json(e);
    }
  },
  insertPostApi: async (req, res) => {
    //  req.user // logged in user
    //  req.body // coming from form
    //  req.params // coming from wildcards declared in routes
    const {post} = req.body;
    try {
      const createdPost = await insertPostToDb(post, req.user.id);
      res.json(createdPost);
    } catch (e) {
      res.status(401).json(e);
    }
  },
};
