import Vue from 'vue'
import Router from 'vue-router'

// router views
const Home = () => import('@/views/Home')
const Signup = () => import('@/views/Signup')
const Login = () => import('@/views/Login')
const Room = () => import('@/views/Room')
const User = () => import('@/views/User')
const Profile = () => import('@/views/Profile')
const Ticket = () => import('@/views/Ticket')

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
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/room/:inventory_id',
      name: 'Room',
      component: Room
    }, {
      path: '/user',
      name: 'user',
      component: User,
      children: [{
        path: '',
        component: Profile,
        meta: {
          tab: 'profile'
        }
      }, {
        path: 'tickets',
        component: Ticket,
        meta: {
          tab: 'tickets'
        }
      }]
    }
  ]
})
