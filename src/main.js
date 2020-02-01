import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Catalog from './components/Catalog'
import Cart from './components/Cart'

Vue.config.productionTip = false

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
