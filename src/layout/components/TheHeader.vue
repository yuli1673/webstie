<!--
 * @Author: yu li
 * @Date: 2021-12-10 00:07:11
 * @LastEditTime: 2021-12-11 12:40:03
 * @LastEditors: yu li
 * @FilePath: /website/src/layout/components/TheHeader.vue
 * @Description: 布局头部
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <header class="header">
    <el-menu
      router
      :default-active="activeRoute"
      class="menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/information">新闻资讯</el-menu-item>
      <el-menu-item index="/">产品中心</el-menu-item>
      <el-menu-item index="/">经典案例</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
    <!-- gitHub -->
    <a href="http://"></a>
    <img class="github-logo" :src="github" alt="gitHub" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: "",
      github:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.h5151.com%2Fuploads%2F20200317%2F9b3d395e15fa652d8e4e4cd695baf54b.png&refer=http%3A%2F%2Fwww.h5151.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641737756&t=6d1778fd2f1d6c48a055b2e766fc0c44",
    };
  },
  watch: {
    $route: {
      handler(route) {
        console.log(route.path);
        this.activeRoute = route.path;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  top 0
  width 100%
  border none
  background-color #545c64
  display flex
  justify-content space-between
  .menu
    border none
  .github-logo
    width 50px
    height 50px
</style>
