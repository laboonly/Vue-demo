// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import HcttopUI from 'hcttop-eleui'
// import 'hcttop-eleui/lib/hcttop-eleui.css'

import '@/icons'
import './permission'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(HcttopUI)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
