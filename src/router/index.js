import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top.vue'
import AboutMe from '@/components/AboutMe.vue'
import Job from '@/components/Job.vue'
import Output from '@/components/Output.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/output',
      name: 'Output',
      component: Output
    }
  ]
})
