<!--
 * @Author: yu li
 * @Date: 2021-12-09 23:09:33
 * @LastEditTime: 2021-12-11 18:33:23
 * @LastEditors: yu li
 * @FilePath: /website/src/layout/index.vue
 * @Description: 布局文件
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <div class="layout">
    <the-nav :default-active="activeRouter" :current-routers="currentRouters" />
    <!-- 子路由 主体 -->
    <div class="container">
      <the-router class="the-router" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheRouter: () => import('@/components/TheRouter'),
    TheNav: () => import('@/components/TheNav/index')
  },
  computed: {
    currentRouters() {
      const currentRouter = this.$router.options.routes.filter(
        (v) => !v.hidden
      )
      return currentRouter
    },
    activeRouter() {
      const activeRouter = this.$route.path || '/'
      return activeRouter
    }
  },
  mounted() {
    // console.log(this.currentRouters, this.activeRouter);
  }
}
</script>
<style lang="stylus" scoped>
.layout
  .container
    margin-top 60px
</style>
