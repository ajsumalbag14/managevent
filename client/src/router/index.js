import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/registration/Registration'
import Dashboard from '@/components/admin/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/registration',
      name: 'registration',
      component: Register
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard
    }
  ],
  mode: 'history'
})
