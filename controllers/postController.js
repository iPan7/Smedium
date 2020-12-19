const {
    deletePostByIdFromDb,
    findAllPostsFromDb,
    findPostByIdFromDb,
    findPostsByUserFromDb,
    insertPostToDb,
    //Update Post
    updatePostByIdFromDb,
} = require("../model/postOrm");

module.exports = {
    findPostsByLoggedInUserApi: async (req, res) => {
        try {
            const idOfCurrentUser = req.user.id;
            let userPosts = await findPostsByUserFromDb(idOfCurrentUser);
            userPosts = userPosts.map(post => {
                post.idOfCurrentUser = idOfCurrentUser;
                return post;
            });
            return res.json(userPosts);
        } catch (e) {
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
            post.idOfCurrentUser = req.user.id;
            return res.json(post);
        } catch (e) {
            res.status(401).json(e);
        }
    },
    findAllPostsApi: async (req, res) => {
        try {
            let posts = await findAllPostsFromDb();
            posts = posts.map(post => {
                post.idOfCurrentUser = req.user.id;
                return post;
            });
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
            createdPost.idOfCurrentUser = req.user.id;
            res.json(createdPost);
        } catch (e) {
            console.log(e);
            res.status(401).json(e);
        }
    },

    //UPDATE POST
    updatePostApi: async (req, res) => {
        const post = req.body;
        try {
        console.log(req.body);
            //This validates the post is by the user
            // const postToUpdate = await findPostByIdFromDb(post.id);
            // if (postToUpdate.userId !== req.user.id) {
            //     return res.status(401).send('You are unauthorized to update this post');
            // }
            const updatePost = await updatePostByIdFromDb(post);
            return res.json(updatePost)

        } catch (e) {
            console.log(e)
            res.status(401).json(e);
        }

    }

};
