import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView.vue'
import NewsView from '../views/NewsView.vue'

import guest from './middleware/guest'
import auth from './middleware/auth'
import isSubscribed from './middleware/isSubscribed'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView,
      meta: {
          middleware: [
              guest
          ]
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: {
        middleware: [
            auth,
            isSubscribed
        ]
    }
    }
  ]
})

export default router
