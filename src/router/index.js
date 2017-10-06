import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'app-register',
      component: Register
    }
  ]
})
