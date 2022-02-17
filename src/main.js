import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 浏览器不显示非生产环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//注册路由器==>所有组件中都可以直接访问2个对象：$router (路由器对象) 与$route(当前路由信息对象)
}).$mount('#app')

// 禁用eslint规则
/* eslint-disable no-unused-vars */
