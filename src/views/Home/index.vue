<!--
 * @Author: yu li
 * @Date: 2021-12-09 22:30:52
 * @LastEditTime: 2021-12-09 23:58:02
 * @LastEditors: yu li
 * @FilePath: /official-website/src/views/Home/index.vue
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
        <img class="carousel-img" :src="carousel.imgSrc" alt="kobe" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      carousels: [
        {
          id: 1,
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-3157058700-63280DB7385D439B5F8EABF024CE7937%2F0%3Ffmt%3Djpg%26size%3D33%26h%3D600%26w%3D900%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641655145&t=c4b31dff318bf6daa9bc3cb95beab57c",
        },
        {
          id: 2,
          imgSrc:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mianfeiwendang.com%2Fpic%2Fea8ba6027ebad2d85a0de27d%2F2-810-jpg_6-1080-0-0-1080.jpg&refer=http%3A%2F%2Fimg.mianfeiwendang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641655075&t=16514abfd4721ef6196f89cd923ee915",
        },
        {
          id: 3,
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
      height 100vh
      width 100vw
      .carousel-item
        width: 100%
        height: 100%
        .carousel-img
          display: block
          width: 100%
          height: 100%
</style>
