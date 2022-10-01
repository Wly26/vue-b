import Vue from 'vue'
import App from './App'
import router from './router'
import * as echarts from 'echarts'
import "echarts-gl"; //echarts 3D插件，有用到3d地图的需要此插件，普通图表不需要引入

import  "./assets/font/iconfont.css";
import "./assets/text/text.scss";

import configs from './configs';
// 请求
import service from './services';
Vue.use(configs)
Vue.use(service)
 


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
