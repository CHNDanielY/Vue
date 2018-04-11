<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import { share } from '@/api/api'
// import wx from 'weixin-js-sdk'
// 分享标题
// const SHARE_TITLT = '雅施达-ACEI大家谈'
// const SHARE_DESC = '雅施达-ACEI大家谈'
/* eslint-disable */
export default {
  name: "App",
  mounted() {
    // 分享
    // let url = location.href.split("#")[0]
    // share({ url }).then(res => {
    //     let js_sdk = res.data;
    //     wx.config({
    //       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //       appId: js_sdk.appId, // 必填，公众号的唯一标识
    //       timestamp: js_sdk.timestamp, // 必填，生成签名的时间戳
    //       nonceStr: js_sdk.nonceStr, // 必填，生成签名的随机串
    //       signature: js_sdk.signature, // 必填，签名，见附录1
    //       jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //     });
    //     wx.ready(function() {
    //       // 分享到朋友圈
    //       wx.onMenuShareTimeline({
    //         title: SHARE_TITLT, // 分享标题
    //         desc: SHARE_DESC,
    //         link: "http://" + window.location.host, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //         imgUrl: "http://" + window.location.host + "/static/share.jpg", // 分享图标
    //         success: function() {
    //           // 用户确认分享后执行的回调函数
    //           alert.log("朋友圈分享成功");
    //         }
    //       });
    //       //  分享给好友
    //       wx.onMenuShareAppMessage({
    //         title: SHARE_TITLT,
    //         desc: SHARE_DESC,
    //         link: "http://" + window.location.host,
    //         imgUrl: "http://" + window.location.host + "/static/share.jpg",
    //         success: function() {
    //           alert.log("分享给朋友成功");
    //         }
    //       });
    //     });
    //   });
  }
};
</script>

<style>
@import "./common/css/reset.css";
@import "./common/css/animate.css";

html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
@font-face {
  font-family: "锐字逼格";
  src: url("./common/font/ruizi.ttf");
}
</style>
