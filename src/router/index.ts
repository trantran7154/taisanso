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
import Email from '../views/Email/Index.vue'
import EmailDetails from '../views/Email/Details.vue'
import Authenticator from '../views/User/Authenticator.vue'
import Post from '../views/Post/Index.vue'

import HomeLayout from '../views/layout/_Home.vue'
import AuthenticationLayout from '../views/layout/_Authentication.vue'
import MainLayout from '../views/layout/_Main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'home',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
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
      },
      {
        path: '/email',
        name: 'email',
        component: Email
      },
      {
        path: '/email/details',
        name: 'details',
        component: EmailDetails
      },
      {
        path: '/user/authenticator',
        name: 'authenticator',
        component: Authenticator
      },
      {
        path: '/post',
        name: 'post',
        component: Post
      }
    ]
  },
  {
    path: '/',
    redirect: 'authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: 'Skills - MyApp' }
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
        path: '/verify',
        name: 'verify',
        component: () => import('../views/User/Verify.vue')
      },
    ]
  },
  {
    path: '/',
    redirect: 'main',
    component: MainLayout,
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue')
      },
      {
        path: '/channel/:uui_user',
        name: 'channel',
        component: () => import('../views/channel/Channel.vue')
      },
      {
        path: '/balance',
        name: 'balance',
        component: () => import('../views/payment/Balance.vue')
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import('../views/payment/Deposit.vue')
      },
      {
        path: '/taisanso-xu',
        name: 'xu',
        component: () => import('../views/xu/Xu.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/seller/Register.vue')
      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
