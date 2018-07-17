import firebase from 'firebase';

const database = firebase.database().ref('posts/');

export default {
  createPost(postText, callback) {
    const post = { uid: '', text: '' };
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
    database.once('value', (posts) => {
      Object.keys(posts.val()).forEach((key) => {
        allPosts.push(posts.val()[key]);
      });
      callback(allPosts);
    });
  },
};
