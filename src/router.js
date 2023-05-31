import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Scale from './views/Scale.vue'
import Debate from './views/Debate.vue'
import AboutPage from './views/AboutPage.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: '/Scale',
      name: 'Scale',
      component: Scale
   },
   {
      path: '/Debate',
      name: 'Debate',
      component: Debate
   },
   {
      path: '/AboutPage',
      name: 'AboutPage',
      component: AboutPage
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router