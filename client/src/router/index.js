import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/registration_form'
import Dashboard from '@/components/admin/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
