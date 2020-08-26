import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '',
    component: Layout,
    children: [{
      path: 'resume',
      component: () => import('@/views/resume/index'),
      name: 'Resume',
      meta: { title: '简历Resume', icon: 'chart' }
    }]
  }
  // {
  //   path: '/404',
  //   component: () => import('@/views/error-page/404'),
  //   hidden: true
  // }
]

export const asyncRoutes = [
  {
    path: '/carousel',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/carousel/index'),
      name: 'Carousel',
      meta: { title: '轮播Carousel', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/icon-demo',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/icon-demo/index'),
      name: 'Icon-demo',
      meta: { title: '图标Icon-demo', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/carousel-vue',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/carousel-vue/index'),
      name: 'Carousel-vue',
      meta: { title: '轮播Carousel-vue', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/canlendar',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/canlendar/index'),
      name: 'Canlendar',
      meta: { title: '日历Canlendar', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/date-picker',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/date-picker/index'),
      name: 'Date Picker',
      meta: { title: '时间选择Date Picker', icon: 'chart', roles: ['visit', 'editor'] }
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
        meta: { title: '图片自适应ImgResponse', icon: 'chart', roles: ['visit', 'editor'] }
      }
    ]
  },
  {
    path: '/cssadapt',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/cssadapt/index'),
      name: 'css Adapt',
      meta: { title: 'css Adapt', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/masonry',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/masonry/index'),
      name: 'Masonry',
      meta: { title: '瀑布流Masonry', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/drag',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/drag/index'),
      name: 'Drag',
      meta: { title: '封装的Demo', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  },
  {
    path: '/grail',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/grail/index'),
      name: 'Grail',
      meta: { title: '圣杯布局和双飞翼布局', icon: 'chart', roles: ['visit', 'editor'] }
    }]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
