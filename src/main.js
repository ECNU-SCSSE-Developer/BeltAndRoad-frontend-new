import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'
// import 'echarts-wordcloud/dist/echarts-wordcloud.js'
// import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'
import axios from 'axios'
Vue.prototype.$http=axios
Vue.prototype.$echarts=echarts
//var echarts =require('echarts');
require('echarts-wordcloud');

Vue.prototype.$store = store;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(echarts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
