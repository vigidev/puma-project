import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Evac from '@/components/EvAc'
import Acad from '@/components/Academic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/Evac',
      name: 'Event',
      component: Evac
    },
    {
      path: '/Academic',
      name: 'Academic',
      component: Acad
    }
  ]
})
