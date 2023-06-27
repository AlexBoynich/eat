import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueYandexMetrika from 'vue-yandex-metrika' 

Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 93952563,
  env: process.env.NODE_ENV,
  router: router,
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
