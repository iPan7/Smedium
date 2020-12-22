import axios from "axios";

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
  getComments(mainpost){
    return axios.get(`/comments?q=${mainpost}`)
  },
  getCommentsById(id){
    return axios.get(`/comments/findcommentbyid/${id}`)
  },
  insertComment(content){
    return axios.post(`/comments/makecomment/`, content)
  },
  updateComment(id){
    return axios.post(`/comments/update/${id}`)
  },
  deleteComments(commentId){
    return axios.delete(`/comments/deletecomment/${commentId}`, {headers: {
      'authorization':localStorage.getItem('token'),
      // 'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'application.json',
    }})
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
  insertLiked(){
    return axios.put('/post')
  },
  deleteFriend(friendId){
    return axios.delete(`/friends/${friendId}`)
  },
//  Update post
  postUpdate(post) {
    console.log(post);
    return axios.put(`/post/update/${post.id}`, post, {
      headers: {
        'authorization':localStorage.getItem('token'),
        // 'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application.json',
      }
    })
  }
};
