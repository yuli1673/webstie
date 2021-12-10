<!--
 * @Author: your name
 * @Date: 2021-02-15 21:05:44
 * @LastEditTime: 2021-12-11 00:02:33
 * @LastEditors: yu li
 * @Description: In User Settings Edit
 * @FilePath: /official-website/src/views/404/index.vue
-->
<template>
  <div class="err">
    <img
      class="err-img"
      src="https://error404.fun/img/illustrations/04.png"
      alt="404"
    />
    <div class="container">
      <div class="text" @click="$router.push('/')">404</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>
<style lang="stylus" scoped>
.err
  height 100vh
  width 100vw
  background black
  text-align center
  &-img
    width 400px
    height 400px
  .container
    margin-top 50px
    text-align center
    background-color #000
    filter contrast(30)
    .text
      font-size 100px
      letter-spacing -40px
      color #fff
      animation move-letter 2s linear forwards
@keyframes move-letter
  0%
    opacity 0
    letter-spacing -40px
    filter blur(10px)
  25%
    opacity 1
  50%
    filter blur(5px)
  100%
    letter-spacing 20px
    filter blur(2px)
</style>
