<!--
 * @Author: josen
 * @Date: 2021-02-12 22:18:58
 * @LastEditTime: 2021-03-11 00:23:18
 * @LastEditors: Please set LastEditors
 * @Description: 这里注意不能使用div包裹，因为menu的标签很多是li，不能使用别的标签
 * @FilePath: /my-admin/src/layout/components/theNav/NavItem.vue
-->
<template>
  <!-- 有 1 个 or 没有子集 -->
  <el-menu-item
    :index="resolvePath(path, router)"
    v-if="hasOnlyChildren(router)"
  >
    <i :class="router.meta.icon" />
    <span>{{ router.meta.title }}</span>
  </el-menu-item>
  <!-- 有 2 or 多个子集 -->
  <!-- 这个属性避免路由（小侧边栏时） hover 报错 :popper-append-to-body="false" -->
  <!-- https://blog.csdn.net/qq_34172153/article/details/105177925 -->
  <el-submenu
    :index="path"
    v-else
    class="submenu"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <i :class="router.meta.icon"></i>
      <span slot="title">{{ router.meta.title }}</span>
    </template>
    <nav-item
      v-for="(item, index) in router.children"
      :key="index"
      :router="item"
      :path="path + '/' + item.path"
    >
      {{ path + "/" + item.path }}
    </nav-item>
  </el-submenu>
</template>

<script>
export default {
  components: {
    NavItem: () => import("./NavItem")
  },
  props: {
    // 当前加载的某一个路由对象
    router: {
      type: Object,
      require: true
    },
    // 路径
    path: {
      type: String,
      require: true
    }
  },
  computed: {
    /**
     * @description: 是否只有一个子集
     * @param {Object} router 路由对象
     * @return {Boolean} true 只有一个子集 ；false 有多个子集
     */
    hasOnlyChildren() {
      return function(router = {}) {
        if ("children" in router && router.children.length > 1) return false;
        // 有 hidden 情况
        return true;
      };
    },
    /**
     * @description: 结果路径
     * @param {String} path 当前路径
     * @param {Object} router 当前路由
     * @return {String} 匹配结果的路径
     */
    resolvePath() {
      return function(path, router) {
        let _p = path;
        if (router.children) {
          const [_item] = router.children;
          _p = _p + "/" + _item.path;
          // 过滤 `//home` 的情况
          _p = _p.replace("//", "/");
        }
        return _p;
      };
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped></style>
