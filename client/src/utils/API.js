import axios from "axios";

export default {
  getAllPosts: function () {
    return axios.get('/post')
  },
  createPost: function (post) {
    return axios.post('/post',
      {
        post
      }
    );
  },
  deletePost: function (postId) {
    return axios.delete(`/post/${postId}`);
  },
  doSignIn(formValues) {
    return axios.post('/auth/signin', formValues);
  },
  doSignUp(formValues) {
    return axios.post('/auth/signup', formValues);
  },
  getSinglePost(postId) {
    return axios.get(`/post/${postId}`);
  },
  getMyPosts() {
    return axios.get(`/post/userposts`);
  }
};
