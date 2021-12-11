<!--
 * @Author: yu li
 * @Date: 2021-12-10 22:25:52
 * @LastEditTime: 2021-12-11 19:43:13
 * @LastEditors: yu li
 * @FilePath: /website/src/components/TheNav/NavItem.vue
 * @Description: 路由子集
 * @ReadMe:
1. 这里注意不能使用div包裹，因为menu的标签很多是li，不能使用别的标签
产考资料，学习文献等...
-->
<template>
  <!-- 有 1 个 or 没有子集 -->
  <el-menu-item
    v-if="
      hasOneShowingChild(router.children, router) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    "
    :index="resolvePath(path, router)"
  >
    <i :class="onlyOneChild.meta.icon || (router.meta && router.meta.icon)" />
    <span>
      {{ onlyOneChild.meta.title || (router.meta && router.meta.icon) }}
    </span>
  </el-menu-item>
  <!-- 有 2 or 多个子集 -->
  <!-- 这个属性避免路由（小侧边栏时） hover 报错 :popper-append-to-body="false" -->
  <!-- https://blog.csdn.net/qq_34172153/article/details/105177925 -->
  <el-submenu
    v-else
    :index="path"
    class="submenu"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <i :class="router.meta.icon" />
      <span slot="title">{{ router.meta.title }}</span>
    </template>
    <nav-item
      v-for="(item, index) in router.children"
      :key="index"
      :router="item"
      :path="path + '/' + item.path"
    />
  </el-submenu>
</template>

<script>
export default {
  components: {
    NavItem: () => import('./NavItem')
  },
  props: {
    // 当前加载的某一个路由对象
    router: {
      type: Object,
      require: true,
      default: null
    },
    // 路径
    path: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      // https://github.com/PanJiaChen/vue-admin-template/issues/237
      onlyOneChild: null
    }
  },
  computed: {
    /**
     * @description: 结果路径
     * @param {String} path 当前路径
     * @param {Object} router 当前路由
     * @return {String} 匹配结果的路径
     */
    resolvePath() {
      return function(path, router) {
        let _p = path
        if (router.children) {
          const [_item] = router.children
          _p = _p + '/' + _item.path
          // 过滤 `//home` 的情况
          _p = _p.replace('//', '/')
        }
        return _p
      }
    }
  },
  mounted() {},
  methods: {
    /**
     * @description: 判断是否只有一个子集路由
     * @param {Array} children 子集的路由
     * @param {Object} parent 父集的路由
     * @return {Boolean} true false
     * todo fix https://github.com/PanJiaChen/vue-admin-template/issues/237
     */
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, noShowingChildren: true }
        return true
      }
      return false
    }
  }
}
</script>
