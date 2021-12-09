/*
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-09 23:34:23
 * @LastEditors: yu li
 * @FilePath: /official-website/src/main.js
 * @Description: 入口文件
 * @ReadMe: 产考资料，学习文献等...
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
