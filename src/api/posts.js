/* eslint-disable*/
import firebase from '@/api/Api';
import auth from '@/api/firebase-auth';

const database = firebase.database().ref('posts/');

const postApi = {
  createPost(postText, callback) {
    const post = { uid: '', text: '' };
    const user = {
      uid: auth.currentUser().uid,
      name: auth.currentUser().displayName,
      photoUrl: auth.currentUser().photoURL,
    };
    database.push({ text: postText, user }).then((res) => {
      post.uid = res.key;
      res.once('value', (item) => {
        post.text = item.val().text;
        post.user = item.val().user;
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
      callback(allPosts.reverse());
    });
  },
};

export default postApi;
