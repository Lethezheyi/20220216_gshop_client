// 注册路由组件
// 路由器对象
import Vue from "vue";
import VueRouter from 'vue-router';
import routes from './routes'

// 声明使用，安装Vue插件
Vue.use(VueRouter);

export default new VueRouter({
    // 模式
    mode:'history',//不带#号
    // 应用中的所有路由，这里使用了routes模块单独分离了出去
    routes
})
