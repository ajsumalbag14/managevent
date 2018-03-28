import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/admin/authentication/Login'
import Register from '@/components/admin/pages/Register'
import Dashboard from '@/components/admin/pages/Dashboard'
import Delegates from '@/components/admin/pages/Delegates'
import AdminWrapper from '@/components/admin/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AdminWrapper,
      children: [
        {
          path: '/',
          component: Dashboard
        },
        {
          path: '/delegates',
          component: Delegates
        },
        {
          path: '/register',
          component: Register
        }    
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  mode: 'history'
})
