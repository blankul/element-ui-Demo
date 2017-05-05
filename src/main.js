import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js' //路由配置
import './element-ui.config.js'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue' 
import echarts from 'echarts' 

Vue.use(VueRouter);
Vue.prototype.echarts = echarts;

const router=new VueRouter(routerConfig);


new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
