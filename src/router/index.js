import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/api/firebase-auth';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Signin from '@/components/Signin';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/vue-pwa/#/',
    },
    {
      path: '/',
      name: '/vue-pwa/#/',
      component: LandingPage,
    },
    {
      path: '/vue-pwa/#/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/vue-pwa/#/sign-in',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/vue-pwa/#/home-page',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAutenticated = auth.currentUser();
  if (requiresAuth && !isAutenticated) {
    next('/signin');
  } else if (!requiresAuth && isAutenticated) {
    next('/home-page');
  } else {
    next();
  }
});

export default router;
