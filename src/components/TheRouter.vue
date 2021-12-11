<!--
 * @Author: yu li
 * @Date: 2021-02-12 18:39:57
 * @LastEditTime: 2021-12-11 12:22:52
 * @LastEditors: yu li
 * @Description: 主体导航路由
 * @FilePath: /website/src/components/TheRouter.vue
-->

<template>
  <transition name="el-fade-in-linear" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "AppMain",
  computed: {},
};
</script>

<style scoped lang="stylus"></style>
