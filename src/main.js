import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//fastclick.js
import FastClick from 'fastclick'
FastClick.attach(document.body);

//reset.css
import './assets/css/reset.css'
//iconfont.css
import './assets/css/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
