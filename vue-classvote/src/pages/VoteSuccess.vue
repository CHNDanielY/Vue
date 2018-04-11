<template>
  <div class="vote-success">
    <transition appear appear-active-class="animated jackInTheBox">
      <div class="success-txt" v-if='!isVote' key='success'>投票成功</div>
      <div class="success-txt" v-if='isVote' key='already'>已投票</div>
    </transition>
    <transition appear appear-active-class="animated fadeInUp">
      <div v-if="!isUpload">
        <div class="share-txt">您有更好的讲题分享给我们吗？</div>
        <div class="link">
          <router-link class="red" to='upload'>我要上传课题</router-link>
        </div>
      </div>
    </transition>
    <transition appear appear-active-class="animated fadeInUp btn-delay">
      <div class="confirm">
          <img src="../assets/confirm.png" alt="" @click='toVoteRulePage'>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VoteSuccess',
  created () {
    console.log(this.$route.query)
    this.isVote = this.$route.query.isVote
    this.isUpload = this.$route.query.isUpload
  },
  methods: {
    toVoteRulePage () {
      console.log(this.isUpload)
      if (this.isUpload === 0) {
        this.$router.push('/home/voterule')
      } else {
        this.$router.push('/home/classlist')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $themecolor: #005733;

    .vote-success{
        font-family: '锐字逼格';
        .success-txt{
            margin-top: 40px;
            text-align: center;
            font-size: 40px;
            font-weight: bold;
            color: $themecolor;
        }
        .share-txt{
            margin-top: 100px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            color: $themecolor;
        }
        .link{
            margin-top: 20px;
            text-align: center;
           .red{
                display: inline-block;
                border-bottom: 1px solid #c42527;
                color: #c42527;
            }
        }
        .confirm{
            margin-top: 50px;
            text-align: center;
            img{
                width: 90px;
            }
        }
    }
    .btn-delay{
      -webkit-animation-delay: .5s;
      animation-delay: .5s;
    }
</style>
