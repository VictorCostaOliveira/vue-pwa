import firebase from '@/api/Api';
import router from '../router';

const firebaseAuth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const auth = {
  signin(user, callback) {
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
          .then((response) => {
            response.user.updateProfile({
              displayName: user.name,
              photoURL: user.photoUrl,
            }).then(() => {
              router.push('/home-page');
            });
          }).catch((error) => {
            callback(error.message);
          });
      });
  },
  login(user, callback) {
    firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
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

  googleLogin() {
    firebaseAuth.signInWithRedirect(provider).then(() => {
      router.push('/home-page');
    });
  },

  signOut() {
    firebaseAuth.signOut().then(() => {
      router.push('/');
    });
  },
};

export default auth;
