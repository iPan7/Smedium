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
  doSignIn(formValues) {
    return axios.post('/auth/signin', formValues);
  },
  doSignUp(formValues) {
    return axios.post('/auth/signup', formValues);
  }
};
