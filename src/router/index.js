import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../Welcome.vue'
import multiCounter from '../MultiCounter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,multiCounter
    }
  ]
})
