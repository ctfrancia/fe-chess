import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/create-tournament',
    name: 'CreateTournament',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/tournament/:id',
    name: 'Tournament',
    component: () => import ('../views/Tournament.vue')
  },
  {
    path: '/account/:id',
    name: 'Account',
    component: () => import('../views/Account.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
