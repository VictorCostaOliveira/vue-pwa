/* eslint-disable*/
import firebase from '@/api/Api';
import auth from '@/api/firebase-auth';

const database = firebase.database().ref('posts/');

const postApi = {
  createPost(postText, callback) {
    const post = { uid: '', text: '' };
    const user = auth.currentUser();
    database.push({ text: postText }).then((res) => {
      post.uid = res.key;
      res.on('child_added', (item) => {
        post.text = item.val();
        callback(post);
      });
    });
  },

  getAllPosts(callback) {
    const allPosts = [];
    const user = auth.currentUser();
    database.once('value', (posts) => {
      Object.keys(posts.val()).forEach((key) => {
        allPosts.push(posts.val()[key]);
      });
      callback(allPosts);
    });
  },
};

export default postApi;
