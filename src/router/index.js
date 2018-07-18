import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Signin from '@/components/Signin';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/home-page',
      name: 'Home',
      component: Home,
    },
  ],
});
