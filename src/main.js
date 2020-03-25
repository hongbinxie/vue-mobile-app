import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//reset.css
import './assets/css/reset.css'
//fastClick
import FastClick from 'fastclick'
FastClick.attach(document.body);
//字体图标
import './assets/css/iconfont.css'
//适配font.js文件
import './assets/js/font.js'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'
//animate.css
import animate from 'animate.css'
//axios
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
