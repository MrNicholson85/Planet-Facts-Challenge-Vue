import { createRouter, createWebHistory } from 'vue-router'
import Mercury from '../views/Mercury.vue'
import Venus from '../views/Venus.vue'
import Earth from '../views/Earth.vue'
import Mars from '../views/Mars.vue'
import Jupiter from '../views/Jupiter.vue'
import Saturn from '../views/Saturn.vue'
import Uranus from '../views/Uranus.vue'
import Neptune from '../views/Neptune.vue'
import FourOhFour from '../views/fourohfour.vue'


const routes = [
  {
    path: '/',
    name: 'Mercury',
    component: Mercury
  },
  {
    path: '/Venus',
    name: 'Venus',
    component: Venus
  },
  {
    path: '/Earth',
    name: 'Earth',
    component: Earth
  },
  {
    path: '/Mars',
    name: 'Mars',
    component: Mars
  },
  {
    path: '/Jupiter',
    name: 'Jupiter',
    component: Jupiter
  },
  {
    path: '/Saturn',
    name: 'Saturn',
    component: Saturn
  },
  {
    path: '/Uranus',
    name: 'Uranus',
    component: Uranus
  },
  {
    path: '/Neptune',
    name: 'Neptune',
    component: Neptune
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'FoutOhFour',
    component: FourOhFour
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
