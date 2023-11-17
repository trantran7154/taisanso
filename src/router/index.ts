import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpCenter from '../views/HelpCenter.vue'
import OTP from '../views/OTP.vue'
import Login from '../views/User/Login.vue'
import SignUp from '../views/User/SignUp.vue'
import ForgotPassword from '../views/User/ForgotPassword.vue'
import ProfileDetail from '../views/User/Profile/Detail.vue'
import ProfileEdit from '../views/User/Profile/Edit.vue'
import ChangePassword from '../views/User/ChangePassword.vue'

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
    path: '/user/profile/detail',
    name: 'profile',
    component: ProfileDetail
  },
  {
    path: '/user/profile/edit',
    name: 'profileedit',
    component: ProfileEdit
  },
  {
    path: '/change-password',
    name: 'changepassword',
    component: ChangePassword
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
