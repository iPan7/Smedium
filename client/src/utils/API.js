import axios from "axios";
import { get } from "../../../routes";

export default {
  getAllPosts: function () {
    return axios.get('/post')
  },
  createPost: function (post) {
    return axios.post('/post',
        {
          post
        },
        {
          headers: {
            authorization:localStorage.getItem('token')
          }
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
  },
  getComments(){
    return axios.get('/comments')
  },
  insertComment(){
    return axios.post('/comments/makecomment')
  },
  updateComment(){
    return axios.post('/comments/update')
  },
  deleteComments(commentId){
    return axios.delete(`/comments/${commentId}`)
  },
  getLoggedUsers(){
    return axios.get('/loggedUsers')
  },
  getFriendsByUser(){
    return axios.get('/friends')
  },
  insertFriends(){
    return axios.post('/friends/newfriend')
  },
  deleteFriend(friendId){
    return axios.delete(`/friends/${friendId}`)
  }
};
