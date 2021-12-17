import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import ('../views/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const {accessToken} = localStorage
  
  if(accessToken || to.name === 'login' || to.name === 'signup') {
    next()
  } else {
    next('/login')
  }
  
})

export default router
