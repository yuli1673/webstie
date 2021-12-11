/*
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-11 12:22:00
 * @LastEditors: yu li
 * @FilePath: /website/src/router/index.js
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
        component: () => import("@/views/Home/index"),
      },
    ],
  },
  {
    path: "/about",
    component: layout,
    redirect: "/about/index",
    children: [
      {
        path: "index",
        name: "about",
        component: () => import("@/views/About"),
      },
    ],
  },
  {
    path: "/information",
    component: layout,
    redirect: "/information/index",
    children: [
      {
        path: "index",
        name: "information",
        component: () => import("@/views/Information/index"),
      },
    ],
  },
  // 404
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
  },
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  routes,
});

export default router;
