
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index.js'
import utils from './utils/index.js'
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
