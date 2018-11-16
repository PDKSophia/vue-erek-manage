import Vue from 'vue'
import Router from 'vue-router'
import ErekManageLogin from '@/view/Login/MainLogin'
import ErekManageRouter from '@/view/Manage/Router'
// 后台管理
import ErekManageHome from '@/view/Manage/ErekHome/Home'

// 列表页
import ErekTableList from '@/view/Manage/ErekList/Table'
import ErekStandardList from '@/view/Manage/ErekList/Standard'
// 安全管理
import ErekSafeSystem from '@/view/Manage/ErekSafe/System'
import ErekSafeAdminRole from '@/view/Manage/ErekSafe/AdminRole'
import ErekSafeAdminPWD from '@/view/Manage/ErekSafe/AdminPassWord'

// 工具栏
import ErekToolMessage from '@/view/Manage/ErekTool/Message'
import ErekToolAdvertise from '@/view/Manage/ErekTool/Advertise'
import ErekToolCommonality from '@/view/Manage/ErekTool/Commonality'
import ErekToolWords from '@/view/Manage/ErekTool/Words'

// 个人页
import ErekPersonInformation from '@/view/Manage/ErekPerson/Information'
import ErekPersonSetting from '@/view/Manage/ErekPerson/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ErekManageLogin',
      component: ErekManageLogin,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/erek-manage',
      name: 'ErekManageRouter',
      component: ErekManageRouter,
      redirect: '/erek-manage/erek-home',
      children: [
        {
          path: 'erek-home',
          name: 'ErekManageHome',
          component: ErekManageHome,
          meta: {
            keepAlive: false
          }
        },
        // 安全管理
        {
          path: 'erek-safe-system',
          name: 'ErekSafeSystem',
          component: ErekSafeSystem,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-safe-admin-role',
          name: 'ErekSafeAdminRole',
          component: ErekSafeAdminRole,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-safe-admin-password',
          name: 'ErekSafeAdminPWD',
          component: ErekSafeAdminPWD,
          meta: {
            keepAlive: false
          }
        },
        // 工具栏
        {
          path: 'erek-tool-message',
          name: 'ErekToolMessage',
          component: ErekToolMessage,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-advertise',
          name: 'ErekToolAdvertise',
          component: ErekToolAdvertise,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-commonality',
          name: 'ErekToolCommonality',
          component: ErekToolCommonality,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-words',
          name: 'ErekToolWords',
          component: ErekToolWords,
          meta: {
            keepAlive: false
          }
        },
        // 列表页
        {
          path: 'erek-list-table',
          name: 'ErekTableList',
          component: ErekTableList,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-list-standard',
          name: 'ErekStandardList',
          component: ErekStandardList,
          meta: {
            keepAlive: false
          } 
        },
        // 个人页
        {
          path: 'erek-user/information',
          name: 'ErekPersonInformation',
          component: ErekPersonInformation,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-user/setting',
          name: 'ErekPersonSetting',
          component: ErekPersonSetting,
          meta: {
            keepAlive: false
          } 
        },
      ],
      meta: {
        keepAlive: false
      }
    }
  ]
})