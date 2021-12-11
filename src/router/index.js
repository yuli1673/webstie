/*
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-11 18:42:10
 * @LastEditors: yu li
 * @FilePath: /website/src/router/index.js
 * @Description: 路由
 * @ReadMe: 产考资料，学习文献等...
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * !the name is used by <keep-alive> (must set!!!)
 * name:'router-name'
 * !超过 2 个子集父类需要设置 meta！！！
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
const routes = [
  // 404
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/404/index.vue')
  },
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/',
    component: layout,
    redirect: '/home',
    // meta: { title: 'home', icon: 'el-icon-s-home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '主页', icon: 'el-icon-s-home' },
        component: () => import('@/views/Home/index')
      }
    ]
  },
  {
    path: '/information',
    component: layout,
    redirect: '/information/index',
    children: [
      {
        path: 'index',
        name: 'information',
        meta: { title: '资讯信息', icon: 'el-icon-s-home' },
        component: () => import('@/views/Information/index')
      }
    ]
  },
  {
    path: '/about',
    component: layout,
    meta: { title: '关于我们', icon: 'el-icon-s-home' },
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        name: 'about',
        meta: { title: '关于我们', icon: 'el-icon-s-home' },
        component: () => import('@/views/About')
      },
      {
        path: 'a',
        meta: { title: '资讯信息', icon: 'el-icon-s-home' },
        component: () => import('@/views/aaa')
      },
      {
        path: 'a2',
        meta: { title: '资讯信息', icon: 'el-icon-s-home' },
        component: () => import('@/views/aaa2')
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
