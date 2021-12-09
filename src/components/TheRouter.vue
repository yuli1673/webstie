<!--
 * @Author: josen
 * @Date: 2021-02-12 18:39:57
 * @LastEditTime: 2021-12-09 23:10:57
 * @LastEditors: yu li
 * @Description: 主体导航路由
 * @FilePath: /official-website/src/components/TheRouter.vue
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
