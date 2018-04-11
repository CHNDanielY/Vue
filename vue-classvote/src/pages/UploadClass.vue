<template>
  <div class="vote-success">
    <div class="title">
        <img src="../assets/enterin.png" alt="">演讲课题征集
    </div>
    <div class="content">
       <div class="block">
            <div class="tit">课题：</div>
            <input type="text" v-model="title">
        </div>
        <div class="block">
            <div class="tit">课题详情：</div>
            <textarea v-model="content"></textarea>
        </div>
        <div class="btn-box">
            <div><img src="../assets/confirm.png" alt="" @click='confirm'></div>
            <div><img src="../assets/cancel.png" alt="" @click='cancel'></div>
        </div>
    </div>
  </div>
</template>

<script>
import { classSubmit } from '@/api/api'

export default {
  name: 'UploadClass',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    cancel () {
      // this.$router.go(-1)
      this.$router.push({
        path: '/home/votesuccess',
        query: {
          isVote: this.isVote,
          isUpload: this.isUpload
        }
      })
    },
    confirm () {
      // 非空验证
      if (!this.title) {
        alert('请输入课题标题')
        return
      }
      if (!this.content) {
        alert('请输入课题内容')
        return
      }
      const query = {
        title: this.title,
        content: this.content
      }
      classSubmit(query).then((res) => {
        console.log(res.data)
        if (res.data.status === 1) {
          this.$router.push('/home/uploadsuccess')
        } else {
          alert(res.data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    $themecolor: #005733;

    .vote-success{
        font-family: '锐字逼格';
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
        .content{
            padding: 0 20px;
            margin-top: 15px;
            .block:nth-child(2){
                margin-top: 15px;
            }
            .tit{
                line-height: 2;
            }
            input,textarea{
                box-sizing: border-box;
                padding: 0 8px;
                width: 100%;
                border: none;
                outline: none;
                border-radius: 5px;
                border: 1px solid $themecolor;
                background-color: transparent;
            }
            textarea{
                min-height: 120px;
            }
            .btn-box{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                img{
                    width: 70px;
                }
            }
        }
    }
</style>
