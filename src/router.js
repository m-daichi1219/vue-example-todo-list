import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/templates/TaskMainView.vue'
import TestView from './components/templates/TestView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
  ]
})
