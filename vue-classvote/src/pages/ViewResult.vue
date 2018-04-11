<template>
  <div class="view-result table">
    <div class="title">
        <img src="../assets/enterin.png" alt="">公布结果
    </div>
    <div class="resultlist-wrap">
        <div class="circle"></div>
        <div class="thead">
            <div>题目</div>
            <div>大区</div>
            <div>分数</div>
        </div>
        <scroll :data='resultList' class="scroll-wrapper">
          <ul class="classlist-wrap">
            <li class="item" v-for='(item,index) in resultList' :key='item.id'>
                <div class="circle" v-if='index !== 0'></div>
                <div class="item-content">
                    <div class="classname">{{item.title}}</div>
                    <div class="zone">{{item.area_name}}</div>
                    <div class="score">{{item.vote_false}}</div>
                </div>
            </li>
          </ul>
        </scroll>
    </div>
  </div>
</template>

<script>
/* eslint-disable indent */
import { voteClass } from '@/api/api'
import Scroll from '@/components/scroll'

export default {
  name: 'ViewResult',
  created () {
    this.loaddata()
  },
  data () {
    return {
      resultList: []
    }
  },
  methods: {
    loaddata () {
      voteClass().then((res) => {
        this.resultList = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    Scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../common/css/table.scss';
    .scroll-wrapper{
      height: 250px;
      overflow: hidden;
    }
</style>
