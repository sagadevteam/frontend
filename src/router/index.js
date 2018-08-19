import Vue from 'vue'
import Router from 'vue-router'

// router views
const Home = () => import('@/views/Home')
const Signup = () => import('@/views/Signup')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
