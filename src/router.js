import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'ComingSoon',
      path: '/coming-soon',
      component: ComingSoon,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
