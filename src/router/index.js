import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/components/Pages.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pages',
      component: Pages
    }
  ]
})
