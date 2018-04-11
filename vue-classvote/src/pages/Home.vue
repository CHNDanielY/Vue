<template>
  <div class="home">
    <!-- <audio src="http://p22ces17g.bkt.clouddn.com/class_bg.mp3" autoplay='autoplay' loop='loop' ref="audio"></audio> -->
    <div class="logo">
      <img src="../assets/logo.png" alt="" width="100%">
    </div>
    <div class="slogan">
      <img src="../assets/slogan.png" alt="" width="100%">
    </div>
    <div>
      <router-view></router-view>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$router.push('/home/login')
  },
  mounted () {
    // 兼容在微信中播放背景音乐
    // document.addEventListener('WeixinJSBridgeReady', () => {
    //   this.$refs.audio.play()
    // }, false)
    // this.$refs.audio.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .home{
      width: 100%;
      height: 100%;
      background:url(../assets/bg.jpg) no-repeat;
      background-size: cover;
    }
</style>
