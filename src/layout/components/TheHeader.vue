<!--
 * @Author: yu li
 * @Date: 2021-12-10 00:07:11
 * @LastEditTime: 2021-12-10 00:28:08
 * @LastEditors: yu li
 * @FilePath: /official-website/src/layout/components/TheHeader.vue
 * @Description: 布局头部
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <header class="header">
    <el-menu
      class="menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  top 0
  width 100%
  z-index 3
  opacity 0.2
  border none
  background-color #545c64
  &:hover
    opacity 0.7
  .menu
    border none
</style>
