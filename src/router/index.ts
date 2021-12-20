import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage;

  if (
    accessToken ||
    to.name === 'login' ||
    to.name === 'signup' ||
    to.name === 'info'
  ) {
    next();
  } else {
    next({ name: 'login' });
  }
});

export default router;
