import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpCenter from '../views/HelpCenter.vue'
import OTP from '../views/OTP.vue'
import Login from '../views/User/Login.vue'
import SignUp from '../views/User/SignUp.vue'
import ForgotPassword from '../views/User/ForgotPassword.vue'
import Profile from '../views/User/Profile.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/help-center',
    name: 'helpcenter',
    component: HelpCenter
  },
  {
    path: '/otp',
    name: 'otp',
    component: OTP
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
