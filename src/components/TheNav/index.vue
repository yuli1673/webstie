<!--
 * @Author: yu li
 * @Date: 2021-12-10 22:25:52
 * @LastEditTime: 2021-12-11 19:03:35
 * @LastEditors: yu li
 * @FilePath: /website/src/components/TheNav/index.vue
 * @Description: 路由文件
 * @ReadMe: 产考资料，学习文献等...
-->

<template>
  <div class="the-nav">
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="the-nav-menu"
      :default-active="activeMenu"
      router
    >
      <nav-item
        v-for="(router, index) in routers"
        :key="index"
        :router="router"
        :path="router.path"
      />
    </el-menu>
    <logo v-if="showLogo" />
  </div>
</template>

<script>
export default {
  components: {
    NavItem: () => import('./NavItem'),
    Logo: () => import('./Logo')
  },
  props: {
    defaultActive: {
      type: String,
      default: () => '/'
    },
    showLogo: {
      type: Boolean,
      default: () => true
    },
    currentRouters: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {}
  },
  computed: {
    routers() {
      let routers = []
      routers = this.currentRouters
      routers = routers.filter((v) => !v.hidden)
      return routers
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.the-nav
  position fixed
  top 0
  left 0
  right 0
  overflow hidden
  z-index 3
  background #545c64
  display flex
  justify-content space-between
  align-items center
  padding 0 10px
  .the-nav-menu
    border none
</style>
