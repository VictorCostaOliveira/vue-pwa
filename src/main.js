// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import firebase from 'firebase';
import App from './App';
import router from './router';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDJd5uORkM2wcPgCx8HABlcQ7tmoQA2RBE',
  authDomain: 'vue-pwa-e5d90.firebaseapp.com',
  databaseURL: 'https://vue-pwa-e5d90.firebaseio.com',
  projectId: 'vue-pwa-e5d90',
  storageBucket: 'vue-pwa-e5d90.appspot.com',
  messagingSenderId: '952553342323',
};

firebase.initializeApp(config);

Vue.use(Vuetify);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
