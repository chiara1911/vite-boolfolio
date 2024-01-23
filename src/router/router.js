import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../assets/pages/AppHome.vue'
import AppProject from '../assets/pages/AppProject.vue'
import SingleProject from '../assets/pages/SingleProject.vue'
import NotFound from '../assets/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProject
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: SingleProject
    },
    {
      path: "/:pathMatch(.*)*",
      name :"not-found",
      component: NotFound

    }
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
