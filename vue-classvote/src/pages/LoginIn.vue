<template>
  <div class="login">
      <transition
       name="input-move"
       enter-active-class="animated bounceInUp"
      >
      <div v-show="animate">
        <div class="block">
          <img src="../assets/icon@user.png" alt="">姓&nbsp;&nbsp;名：
          <input type="text" v-model="name">
        </div>
        <div class="block">
            <img src="../assets/icon@phone.png" alt="">手机号：
            <input type="text" v-model="phone">
        </div>
      </div>
      </transition>
      <transition name="btn-move" enter-active-class="animated bounceInUp btn-delay">
        <div v-show="animate" class="enter" @click="enterIn">
            <img src="../assets/enterin.png" alt="">
            <p>进入</p>
        </div>
      </transition>
  </div>
</template>

<script>
/* eslint-disable no-useless-return */
import { login, verify } from '@/api/api'
import storage from 'good-storage'

export default {
  name: 'LoginIn',
  created () {
    // 验证sessionKey是否有效
    const sessionKey = storage.get('sessionKey', '')
    verify({ sessionKey }).then((res) => {
      console.log(res.data)
      if (res.data.status === 0) {
        console.log(res.data.msg)
      } else {
        // 若有效  跳转到规则页面
        if (sessionKey) {
          this.$router.push('/home/voterule')
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  data () {
    return {
      name: '',
      phone: '',
      animate: false
    }
  },
  methods: {
    enterIn () {
      // 非空验证
      if (!this.name) {
        alert('请输入姓名')
        return
      }
      if (!this.phone) {
        alert('请输入手机号')
        return
      }
      const query = {
        name: this.name,
        phone: this.phone
      }
      login(query).then((res) => {
        const data = res.data
        if (data.status === 1) {
          storage.set('sessionKey', data.msg)
          this.$router.push('/home/voterule')
        } else {
          alert(data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
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
    .login{
        font-family: '锐字逼格';
        margin-top: 50px;
        .block{
            text-align: center;
            margin-top: 20px;
            color: $themecolor;
            font-weight: bold;
            img{
                width: 18px;
                vertical-align: middle;
                margin-right: 5px;
            }
            input{
                padding: 0 5px;
                border: none;
                border: 1px solid $themecolor;
                border-radius: 5px;
            }
        }
        .enter{
            margin-top: 50px;
            text-align: center;
            color: $themecolor;
            img{
                width: 60px;
            }
            p{
                margin-top: 15px;
                line-height: 2;
                position: relative;
            }
            p:after{
                position: absolute;
                top: -3px;
                left: 50%;
                transform: translateX(-6px);
                content: '';
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid $themecolor;
            }
        }

    }
    .btn-delay{
      -webkit-animation-delay: .5s;
    }
</style>
