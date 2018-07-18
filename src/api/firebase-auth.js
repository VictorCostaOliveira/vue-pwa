import firebase from '@/api/Api';

const firebaseAuth = firebase.auth();

const auth = {
  signin(user) {
    debugger;
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        response.user.updateProfile({
          displayName: user.name,
        }).then(() => {
        }).catch(() => {
        });
      }).catch(() => {

      });
  },
  login(user) {
    debugger;
    firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        console.log(response);
        debugger;
      });
  },
};

export default auth;
