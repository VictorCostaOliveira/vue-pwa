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
      redirect: '/',
    },
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
