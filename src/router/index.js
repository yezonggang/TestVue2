import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/view/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/home/main',
          name: 'main',
          component: () => import('../views/Main/')
        },
        {
          path: '/home/mall',
          name: 'mall',
          component: () => import('../views/Mall/')
        },
        {
          path: '/home/user',
          name: 'user',
          component: () => import('../views/User/')
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login')
    }
  ]
})
