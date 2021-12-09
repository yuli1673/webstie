<!--
 * @Author: yu li
 * @Date: 2021-12-09 23:09:33
 * @LastEditTime: 2021-12-10 00:09:29
 * @LastEditors: yu li
 * @FilePath: /official-website/src/layout/index.vue
 * @Description: 布局文件
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <div class="layout">
    <div></div>
    <the-header />
    <!-- 子路由 主体 -->
    <div class="container">
      <the-router class="the-router" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheRouter: () => import("@/components/TheRouter"),
    TheHeader: () => import("./components/TheHeader.vue"),
  },
};
</script>
<style lang="stylus" scoped>
// .layout
</style>
