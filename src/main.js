import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fastClick
import FastClick from 'fastclick'
FastClick.attach(document.body);
//适配font.js文件
import './assets/js/font.js'
//axios
import axios from 'axios'
Vue.prototype.axios = axios

//reset.css
import './assets/css/reset.css'
//字体图标
import './assets/css/iconfont.css'
//animate.css
import animate from 'animate.css'

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
