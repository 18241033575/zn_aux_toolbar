import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import time from '@/components/time'
import salary from '@/components/salary'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: index,
    },
    {
      path: '/time',
      name: 'time',
      component: time,
    },
    {
      path: '/salary',
      name: 'salary',
      component: salary,
    }
  ]
})
