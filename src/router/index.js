import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comics',
      name: 'Comics',
      // webpack code spliting
      component: () => import('@/pages/Comics')
    },
    {
      path: '/comics/:id',
      name: 'ComicDetail',
      component: () => import('@/pages/ComicDetail')
    },
    {
      path: '/comics/:id/chapt/:cid',
      name: 'ComicChapter',
      component: () => import('@/pages/ComicChapter')
    },
    {
      path: '*',
      redirect: '/comics'
    }
  ]
})
