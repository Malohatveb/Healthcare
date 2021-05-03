import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import router from './router'

Vue.use(VueRouter)
Vue.use(axios)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
