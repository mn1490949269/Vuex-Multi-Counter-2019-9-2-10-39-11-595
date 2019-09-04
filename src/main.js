import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store.js'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Vuex)
const vueStore = new Vuex.Store(store)

new Vue({
  router,
  store:vueStore,
  render: h => h(App),
}).$mount('#app')
