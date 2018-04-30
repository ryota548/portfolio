import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '@/components/organisms/ItemList.vue'
import AboutMe from '@/data/aboutme.json'
import Contents from '@/data/contents.json'
import Output from '@/data/output.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contents',
      component: ItemList,
      props: {
        isContents: true,
        itemJson: Contents
      }
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: ItemList,
      props: {
        isContents: false,
        itemJson: AboutMe
      }
    },
    {
      path: '/output',
      name: 'Output',
      component: ItemList,
      props: {
        isContents: false,
        itemJson: Output
      }
    }
  ]
})
