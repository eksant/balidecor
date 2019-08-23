import Vue from 'vue'
import App from './App.vue'

/** plugins */
import '@/plugins/antd'
import router from '@/plugins/router'
import i18n from '@/plugins/i18n'
import store from '@/plugins/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
