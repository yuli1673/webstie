/*
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-09 23:51:45
 * @LastEditors: yu li
 * @FilePath: /official-website/src/router/index.js
 * @Description: 路由
 * @ReadMe: 产考资料，学习文献等...
 */
import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home/index"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
