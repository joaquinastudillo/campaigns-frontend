import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { routes } from './routes'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'dashboard',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
