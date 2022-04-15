// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../src/store/index'

import http from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http
import '../src/mock/index'

// 导航守卫逻辑
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  // 这里权限的逻辑就是不等于token 并且 值为login
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  created() {
    store.commit('addMenu', router)
  },
  components: { App },
  template: '<App/>'
})
