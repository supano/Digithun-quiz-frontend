
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../node_modules/bulma/css/bulma.min.css'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login},
    { path: '/register', component: Register},
    { path: '/profile', component: Profile}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
