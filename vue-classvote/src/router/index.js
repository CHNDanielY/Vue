import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import LoginIn from '@/pages/LoginIn'
import VoteRule from '@/pages/VoteRule'
import VoteClass from '@/pages/VoteClass'
import VoteSuccess from '@/pages/VoteSuccess'
import UploadClass from '@/pages/UploadClass'
import UploadSuccess from '@/pages/UploadSuccess'
import ViewResult from '@/pages/ViewResult'
import ClassList from '@/pages/ClassList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/login',
          name: 'LoginIn',
          component: LoginIn
        },
        {
          path: '/home/voterule',
          name: 'VoteRule',
          component: VoteRule
        },
        {
          path: '/home/vote',
          name: 'VoteClass',
          component: VoteClass
        },
        {
          path: '/home/votesuccess',
          name: 'VoteSuccess',
          component: VoteSuccess
        },
        {
          path: '/home/upload',
          name: 'UploadClass',
          component: UploadClass
        },
        {
          path: '/home/uploadsuccess',
          name: 'UploadSuccess',
          component: UploadSuccess
        },
        {
          path: '/home/viewresult',
          name: 'ViewResult',
          component: ViewResult
        },
        {
          path: '/home/classlist',
          name: 'ClassList',
          component: ClassList
        }
      ]
    }
  ]
})
