<template>
  <div class="vote-rule">
      <transition enter-active-class="animated bounceInLeft">
        <div v-show="animate" class="title">
          <img src="../assets/enterin.png" alt="">投票
        </div>
      </transition>
      <transition enter-active-class="animated bounceInLeft rule-delay">
        <div v-show="animate" class="rule-box">
          <div class="subtit">
              课题遴选规则：
          </div>
          <div class="rule-txt">
              1、请您选取自己喜欢的课题并投票，投票结果会在截止日期发布<br/>
              2、您有三票，分别为首选，优，良，每题可投一票，可多投也可不投<br/>
              3、后台根据投票数据计算出每个大区的投票题目排名，第一名为该大区所讲题目
          </div>
          <div class="vote-btn">
              <img v-show='voteState' src="../assets/start.png" alt="" width="135" @click="startVote">
              <img v-show='voteState === 2' src="../assets/viewresult.png" alt="" width="135" @click="toViewResult">
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import { getVoteState } from '@/api/api'

export default {
  name: 'VoteRule',
  created () {
    this.loadData()
    console.log(this.voteState)
  },
  data () {
    return {
      voteState: true, // 投票开始状态
      tipMsg: '',
      isVote: null,
      animate: false
    }
  },
  methods: {
    loadData () {
      getVoteState().then((res) => {
        console.log(res)
        this.voteState = res.data.status
        this.tipMsg = res.data.msg
        this.isVote = res.data.is_vote
        this.isUpload = res.data.is_upload
      }).catch((err) => {
        console.log(err)
      })
    },
    startVote () {
      // 投票未开始
      if (this.voteState === 0) {
        alert(this.tipMsg)
      }
      // 投票已开始 且没投过票
      if (this.voteState && this.isVote === 0) {
        this.$router.push('/home/vote')
      }
      // 投票已开始 且投过票
      if (this.voteState === 1 && this.isVote === 1) {
        this.$router.push({
          path: '/home/votesuccess',
          query: {
            isVote: this.isVote,
            isUpload: this.isUpload
          }
        })
      }
    },
    // 投票结束
    toViewResult () {
      this.$router.push('/home/viewresult')
    }
  },
  mounted () {
    this.animate = true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $themecolor: #005733;
    .vote-rule{
        font-family: '锐字逼格';
        padding: 0 20px;
        color: $themecolor;
        .title{
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            img{
                margin-right: 8px;
                width: 28px;
                vertical-align: middle;
            }
        }
        .rule-box{
            margin-top: 20px;
            .subtit{
                box-sizing: border-box;
                padding-left: 10px;
                line-height: 2;
            }
            .rule-txt{
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid $themecolor;
                border-radius: 5px;
                line-height: 2;
            }
            .vote-btn{
                margin-top: 30px;
                text-align: center;
            }
        }
    }
    .rule-delay{
      -webkit-animation-delay: .5s;
      animation-delay: .5s;
    }
</style>
