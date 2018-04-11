<template>
  <div class="vote-class">
      <transition enter-active-class="animated bounceInDown">
        <div v-show="animate" class="title">
          <img src="../assets/enterin.png" alt="">投票
        </div>
      </transition>
      <transition enter-active-class="animated bounceInDown scroll-delay">
        <scroll v-show="animate" :data='classList' class="scroll-wrapper">
          <ul class="classlist-wrap">
            <li class="item" v-for='(item) in classList' :key='item.id'>
                <div class="circle"></div>
                <p class="item-title">
                  {{item.title}}
                </p>
                <div class="slect">
                    <span class="option" :class="{'active': activeClass[item.id] === sindex}" v-for='(score, sindex) in scoreLevel' @click="select(item.id, sindex)" :key='sindex'>{{score}}</span>
                </div>
            </li>
          </ul>
        </scroll>
      </transition>
      <transition enter-active-class="animated bounceInUp btn-delay">
        <div v-show="animate" class="submit">
          <img src="../assets/votebtn.png" alt="" width="106" @click='submit'>
        </div>
      </transition>
  </div>
</template>

<script>
import { voteClass, voteSubmit } from '@/api/api'
import Scroll from '@/components/scroll'

export default {
  name: 'VoteClass',
  created () {
    voteClass().then((res) => {
      console.log(res.data)
      this.classList = res.data.data
    }).catch((err) => {
      console.log(err)
    })
  },
  data () {
    return {
      animate: false,
      activeClass: {},
      scoreLevel: ['首选', '优', '良'],
      classList: [],
      selectClassList: {}
    }
  },
  methods: {
    select (id, sindex) {
      // 限制最多选三票
      const _length = Object.keys(this.activeClass).length
      if (this.activeClass[id] === undefined) {
        if (_length > 2) {
          alert('最多只能投三票哦')
          return
        }
      } else {
        console.log('修改之前选的')
      }
      this.$set(this.activeClass, id, sindex)
      let score
      if (sindex === 0) {
        score = 3
      }
      if (sindex === 1) {
        score = 2
      }
      if (sindex === 2) {
        score = 1
      }
      this.$set(this.selectClassList, id, score)
    },
    submit () {
      console.log(this.activeClass)
      const valArr = Object.values(this.activeClass)
      const isSame = this._isSameItem(valArr) // true 表示 没有重复 false 表示有重复
      if (isSame) {
        const str = JSON.stringify(this.selectClassList)
        const query = { str }
        // 提交
        voteSubmit(query).then((res) => {
          console.log(res.data)
          const data = res.data
          if (data.status === 1) {
            this.$router.push('/home/votesuccess')
          } else {
            alert(data.msg)
          }
        }).catch((err) => {
          console.log(err)
        })
      } else {
        alert('选择有重复的分数项')
      }
    },
    _isSameItem (arr) {
      const set = new Set(arr)
      return set.size === arr.length
    }
  },
  mounted () {
    this.animate = true
  },
  components: {
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $themecolor: #005733;

    .vote-class{
        font-family: '锐字逼格';
        padding: 0 30px;
        color: $themecolor;
        margin-top: 10px;
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
        .scroll-wrapper{
          height: 230px;
          overflow: hidden;
        }
        .classlist-wrap{
            margin-top: 10px;
            // max-height: 220px;
            // overflow-y: scroll;
            padding: 5px;
            .item{
                box-sizing: border-box;
                padding: 8px;
                border-top: 1px solid $themecolor;
                border-left: 3px solid $themecolor;
                position: relative;
                .circle{
                    position: absolute;
                    top: -4px;
                    left: -5px;
                    border-radius: 50%;
                    width: 6px;
                    height: 6px;
                    border: 1px solid $themecolor;
                    background-color: #fff;
                }
                .item-title{
                    color: #595757;
                    font-size: 14px;
                }
                .slect{
                    .option{
                        margin-right: 20px;
                        display: inline-block;
                        width: 60px;
                        height: 25px;
                        text-align: center;
                        line-height: 25px;
                        color: #fff;
                        background-color: $themecolor;
                        border-radius: 5px;
                        &:nth-child(1){
                            margin-left: 20px;
                        }
                        &.active{
                          background-color: #de3b11;
                        }
                    }
                }
            }
        }
        .submit{
          margin-top: 10px;
          text-align: center;
        }
    }
    .scroll-delay{
      -webkit-animation-delay: .5s;
      animation-delay: .5s;
    }
    .btn-delay{
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
</style>
