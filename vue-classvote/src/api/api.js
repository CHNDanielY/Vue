import request from '@/common/js/request'

// export default {
//   // 验证sessionKey
//   verify: function (query) {
//     return request({
//       url: '/apis/checkLogin',
//       method: 'post',
//       data: query // 有两种配置params和data params会把参数放到url后
//     })
//   },
//   // 登录
//   login: function (query) {
//     return request({
//       url: '/apis/login',
//       method: 'post',
//       data: query // 有两种配置params和data params会把参数放到url后
//     })
//   },
//   // 投票状态
//   getVoteState: function () {
//     return request({
//       url: '/apis/getSet',
//       method: 'get'
//     })
//   },
//   // 投票课题列表 投票结果列表
//   voteClass: function () {
//     return request({
//       url: '/apis/getTopic',
//       method: 'get'
//     })
//   },
//   // 提交投票结果
//   voteSubmit: function (query) {
//     return request({
//       url: '/apis/vote',
//       method: 'post',
//       data: query
//     })
//   },
//   // 提交课题
//   classSubmit: function (query) {
//     return request({
//     url: '/apis/createProject',
//     method: 'post',
//     data: query
//   })
//   },
//   // 课题征集列表
//   getCollectList: function () {
//     return request({
//       url: '/apis/getProject',
//       method: 'get'
//     })
//   },
//   // 分享
//   share:function (query) {
//     return request({
//       url: '/apis/wxJsSdk',
//       method: 'get',
//       params: query
//     })
//   }
// }
// 验证sessionKey
export function verify (query) {
  return request({
    url: '/apis/checkLogin',
    method: 'post',
    data: query // 有两种配置params和data params会把参数放到url后
  })
}
// 登录
export function login (query) {
  return request({
    url: '/apis/login',
    method: 'post',
    data: query // 有两种配置params和data params会把参数放到url后
  })
}
// 投票状态
export function getVoteState () {
  return request({
    url: '/apis/getSet',
    method: 'get'
  })
}
// 投票课题列表 投票结果列表
export function voteClass () {
  return request({
    url: '/apis/getTopic',
    method: 'get'
  })
}
// 提交投票结果
export function voteSubmit (query) {
  return request({
    url: '/apis/vote',
    method: 'post',
    data: query
  })
}
// 提交课题
export function classSubmit (query) {
  return request({
    url: '/apis/createProject',
    method: 'post',
    data: query
  })
}
// 课题征集列表
export function getCollectList () {
  return request({
    url: '/apis/getProject',
    method: 'get'
  })
}
// 分享
export function share (query) {
  return request({
    url: '/apis/wxJsSdk',
    method: 'get',
    params: query
  })
}
