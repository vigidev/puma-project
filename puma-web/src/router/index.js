import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Event from '@/components/Event'
import Acad from '@/components/Academic'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/academic',
      name: 'Academic',
      component: Acad
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact Us',
      component: Contact
    }
  ],
  mode: 'history', // https://router.vuejs.org/en/essentials/history-mode.html
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
