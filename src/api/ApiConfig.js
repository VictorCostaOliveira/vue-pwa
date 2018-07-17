import firebase from 'firebase';

// Initialize Firebase

export default {
  init() {
    const config = {
      apiKey: 'AIzaSyDJd5uORkM2wcPgCx8HABlcQ7tmoQA2RBE',
      authDomain: 'vue-pwa-e5d90.firebaseapp.com',
      databaseURL: 'https://vue-pwa-e5d90.firebaseio.com',
      projectId: 'vue-pwa-e5d90',
      storageBucket: 'vue-pwa-e5d90.appspot.com',
      messagingSenderId: '952553342323',
    };
    firebase.initializeApp(config);
  },
};
