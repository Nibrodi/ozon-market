import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import {Vue2Storage} from 'vue2-storage'

Vue.config.productionTip = false

Vue.use(Vue2Storage, {
  prefix: 'app_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000 // 24 часа
})
Vue.use(VueRouter)

const routes = [
  {path: '*', redirect: '/catalog'},
  {path: '/cart', component: Cart},
  {path: '/catalog', component: Catalog}
]

const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
