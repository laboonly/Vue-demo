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
        path: 'resume',
        component: () => import('@/views/resume/index'),
        name: 'Resume',
        meta: { title: 'Resume', icon: 'chart' }
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
      path: '/icon-demo',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/icon-demo/index'),
        name: 'Icon-demo',
        meta: { title: 'Icon-demo', icon: 'chart' }
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
    },
    {
      path: '/canlendar',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/canlendar/index'),
        name: 'Canlendar',
        meta: { title: 'Canlendar', icon: 'chart' }
      }]
    },
    {
      path: '/date-picker',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/date-picker/index'),
        name: 'Date Picker',
        meta: { title: 'Date Picker', icon: 'chart' }
      }]
    },
    {
      path: '/imgresponse',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/imgresponse/index'),
          name: 'ImgResponse',
          meta: { title: 'ImgResponse', icon: 'chart' }
        }
      ]
      path: '/cssadapt',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/cssadapt/index'),
        name: 'css Adapt',
        meta: { title: 'css Adapt', icon: 'chart' }
      }]
    },
    {
      path: '/masonry',
      component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/masonry/index'),
        name: 'Masonry',
        meta: { title: 'Masonry', icon: 'chart' }
      }]
    }
  ]
})
