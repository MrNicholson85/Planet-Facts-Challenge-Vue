import { createRouter, createWebHistory } from 'vue-router'
import Mercury from '../views/Mercury.vue'

const routes = [
  {
    path: '/',
    name: 'Mercury',
    component: () => import(/* webpackChunkName: "Mercury" */ '../views/Mercury.vue')
  },
  {
    path: '/Venus',
    name: 'Venus',
    // route level code-splitting
    // this generates a separate chunk (Venus.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Venus" */ '../views/Venus.vue')
  },
  {
    path: '/Earth',
    name: 'Earth',
    // route level code-splitting
    // this generates a separate chunk (Earth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Earth" */ '../views/Earth.vue')
  },
  {
    path: '/Mars',
    name: 'Mars',
    // route level code-splitting
    // this generates a separate chunk (Mars.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Mars" */ '../views/Mars.vue')
  },
  {
    path: '/Jupiter',
    name: 'Jupiter',
    // route level code-splitting
    // this generates a separate chunk (Jupiter.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Jupiter" */ '../views/Jupiter.vue')
  },
  {
    path: '/Saturn',
    name: 'Saturn',
    // route level code-splitting
    // this generates a separate chunk (Saturn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Saturn" */ '../views/Saturn.vue')
  },
  {
    path: '/Uranus',
    name: 'Uranus',
    // route level code-splitting
    // this generates a separate chunk (Uranus.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Uranus" */ '../views/Uranus.vue')
  },
  {
    path: '/Neptune',
    name: 'Neptune',
    // route level code-splitting
    // this generates a separate chunk (Neptune.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Neptune" */ '../views/Neptune.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
