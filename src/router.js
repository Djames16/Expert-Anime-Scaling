import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Scale from './views/Scale.vue'
import Debate from './views/Debate.vue'
import About from './views/AboutPage.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: ''
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router