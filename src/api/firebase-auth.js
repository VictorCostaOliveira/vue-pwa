import firebase from '@/api/Api';
import router from '../router';

const firebaseAuth = firebase.auth();

const auth = {
  signin(user, callback) {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        response.user.updateProfile({
          displayName: user.name,
        }).then(() => {
          router.push('/home-page');
        });
      }).catch((error) => {
        callback(error.message);
      });
  },
  login(user, callback) {
    firebaseAuth.setPersistence(`${firebase.auth.Auth.Persistence.SESSION}`)
      .then(() => {
        firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
          .then(() => {
            router.push('/home-page');
          }).catch((error) => {
            callback(error.message);
          });
      });
  },
  currentUser() {
    return firebaseAuth.currentUser;
  },

  signOut() {
    firebase.signOut();
    router.push('/');
  },
};

export default auth;