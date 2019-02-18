import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      children: [{
        path: 'helloworld',
        component: () => import('@/views/helloworld/index'),
        name: 'HelloWorld',
        meta: { title: 'HelloWorld', icon: 'chart' }
      }]
    },
    {
      path: '/carousel',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/carousel/index'),
        name: 'Carousel',
        meta: { title: 'Carousel', icon: 'chart' }
      }]
    },
    {
      path: '/carousel-vue',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/carousel-vue/index'),
        name: 'Carousel-vue',
        meta: { title: 'Carousel-vue', icon: 'chart' }
      }]
    }
  ]
})
