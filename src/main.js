import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js' //路由配置
import './element-ui.config.js'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue' 

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
