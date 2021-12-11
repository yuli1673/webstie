<!--
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-11 12:29:43
 * @LastEditors: yu li
 * @FilePath: /website/src/views/Home/index.vue
 * @Description: 首页
 * @ReadMe: 产考资料，学习文献等...
-->
<template>
  <div class="home">
    <el-carousel class="carousel" direction="vertical">
      <el-carousel-item
        class="carousel-item"
        v-for="carousel in carousels"
        :key="carousel.id"
      >
        <h1 class="carousel_title">{{ carousel.text }}</h1>
        <img class="carousel_img" :src="carousel.imgSrc" alt="kobe" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      carousels: [
        {
          id: 1,
          text: "",
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3157058700-63280DB7385D439B5F8EABF024CE7937%2F0%3Ffmt%3Djpg%26size%3D33%26h%3D600%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641655145&t=c4b31dff318bf6daa9bc3cb95beab57c",
        },
        {
          id: 2,
          text: "",
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mianfeiwendang.com%2Fpic%2Fea8ba6027ebad2d85a0de27d%2F2-810-jpg_6-1080-0-0-1080.jpg&refer=http%3A%2F%2Fimg.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641655075&t=16514abfd4721ef6196f89cd923ee915",
        },
        {
          id: 3,
          text: "永远笑着面对生活",
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b1b456497aff6ac7251c94eb40a3.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641657506&t=4b11353cda16f84a2fe28bd08cc6e1a2",
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
.home
  .carousel
    >>> .el-carousel__container
      height calc(100vh - 60px)
      width 100vw
      .carousel-item
        width 100%
        height 100%
        .carousel_title
          position absolute
          top 0
          bottom 0
          left 10%
          margin auto
          color white
          width 550px
          height 100px
          animation show 3s infinite alternate
          font-size 40px
          font-family 'Comic Sans MS'
        .carousel_img
          display block
          width 100%
          height 100%
@keyframes show
  from
    text-shadow 0 0 3px #fefcc9, 3px -3px 8px #feec85, -10px -10px 20px #ffae34, 10px -20px 40px #ec760c, -10px -30px 50px #cd4606, 0 -50px 60px #973716, 10px -70px 70px #451b0e
  to
    text-shadow 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e
</style>
