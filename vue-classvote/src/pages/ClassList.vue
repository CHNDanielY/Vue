<template>
  <div class="view-result table">
    <div class="title">
        <img src="../assets/enterin.png" alt="">课题征集列表
    </div>
    <div class="resultlist-wrap">
        <div class="circle"></div>
        <div class="thead">
            <div>题目</div>
            <div>时间</div>
            <div>上传者</div>
            <div>票数</div>
        </div>
        <scroll :data='classList' class="scroll-wrapper">
          <ul class="classlist-wrap">
            <li class="item" v-for='(item,index) in classList' :key='item.id'>
                <div class="circle" v-if='index !== 0'></div>
                <div class="item-content">
                    <div class="classname">{{item.title}}</div>
                    <div class="zone">{{item.created_at | fomatTime}}</div>
                    <div class="score">{{item.lecturer_name}}</div>
                    <div class="count">{{item.count}}</div>
                </div>
            </li>
          </ul>
        </scroll>
    </div>
  </div>
</template>

<script>
/* eslint-disable indent */
import { getCollectList } from '@/api/api'
import Scroll from '@/components/scroll'

export default {
  name: 'ClassList',
  created () {
    this.loadData()
  },
  data () {
    return {
      classList: []
    }
  },
  methods: {
    loadData () {
      getCollectList().then((res) => {
        this.classList = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  filters: {
    fomatTime (timestamp) {
      return new Date(parseInt(timestamp) * 1000).toLocaleString().substr(0, 16)
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
    .table{
      max-height: 400px;
      overflow-y: scroll;
    }
    .scroll-wrapper{
      height: 250px;
      overflow: hidden;
    }
</style>
