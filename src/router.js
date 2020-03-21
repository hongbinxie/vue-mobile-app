import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './components/home/Home'

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
