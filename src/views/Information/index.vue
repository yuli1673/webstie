<!--
 * @Author: yu li
 * @Date: 2021-12-11 12:18:27
 * @LastEditTime: 2021-12-11 19:41:01
 * @LastEditors: yu li
 * @FilePath: /website/src/views/Information/index.vue
 * @Description: 最新资讯
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <div class="information">
    <div class="container">
      <!-- 头部 头条 -->
      <div class="top">
        <!-- 轮播图 -->
        <el-carousel class="carousel-container">
          <el-carousel-item
            v-for="carousel in carousels"
            :key="carousel.id"
            class="carousel-item"
          >
            <h3 class="carousel-title">{{ carousel.title }}</h3>
            <img class="carousel-img" :src="carousel.imgSrc" alt="advertise">
          </el-carousel-item>
        </el-carousel>
        <!-- 右侧头条 -->
        <ul class="top-new">
          <li v-for="topNew in topNews" :key="topNew.id" class="item_new">
            <img
              class="item_new-img"
              :src="topNew.imgSrc"
              :alt="topNew.title"
            >
            <div class="content">
              <h5 class="item_new-title">{{ topNew.title }}</h5>
              <p class="item_new-createAt">{{ topNew.createAt }}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 资讯 -->
      <div class="info">
        <h1 class="info_logo">
          <i class="el-icon-basketball" />
          资讯
        </h1>
        <!-- 滚动显示 历史资讯 -->
        <ul v-infinite-scroll="load" class="info_history">
          <li
            v-for="(i, index) in count"
            :key="index"
            class="info_history-item"
          >
            资讯内容。。。{{ i }}
          </li>
        </ul>
      </div>
    </div>
    <el-backtop />
  </div>
</template>

<script>
import config from './config'
export default {
  data() {
    return {
      count: 0,
      // 轮播图
      carousels: config.carousels,
      // 头条信息
      topNews: config.topNews
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>

<style lang="stylus" scoped>
.information
  background url('https://mat1.gtimg.com/qqcdn/chinanba/web/static/styles/images/bg.jpg') center / cover no-repeat
  .container
    width 1200px
    margin auto
    .top
      display flex
      justify-content space-between
      // 轮播图
      .carousel-container
        margin-right 20px
        flex-shrink 0
        width 750px
        >>> .el-carousel__container
          height 400px
          .carousel-item
            .carousel-title
              position absolute
              margin 0
              width 100%
              bottom 0
              background linear-gradient(transparent 0.84%, #000)
              color #fff
              height 40px
              line-height 40px
              padding 20px
            .carousel-img
              width 100%
              height 100%
              box-shadow inset 10px 10px 10px #ccc
      .top-new
        margin-left 10px
        list-style none
        padding 0
        margin 0
        height 400px
        overflow auto
        &::-webkit-scrollbar
          width 0
        .item_new
          margin 10px 0
          display flex
          padding 5px
          border 1px #999 solid
          justify-content space-between
          &-img
            width 160px
    .info
      &_logo
        color #2464B5
        border-bottom 2px solid #E11647
        padding-bottom 3px
      &_history
        height 900px
        overflow auto
</style>
