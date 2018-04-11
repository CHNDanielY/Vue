<template>
  <div class="upload-success">
    <transition appear appear-active-class="animated jackInTheBox">
      <div class="success-txt">上传成功</div>
    </transition>
    <transition appear appear-active-class="animated fadeInUp">
      <div class="confirm">
        <img src="../assets/confirm.png" alt="" width="100" @click="confirm">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UploadSuccess',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    confirm () {
      this.$router.push('/home/classlist')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $themecolor: #005733;

    .upload-success{
        font-family: '锐字逼格';
        .success-txt{
            margin-top: 40px;
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color: $themecolor;
        }
        .confirm{
          text-align: center;
          margin-top: 70px;
        }
    }
</style>
