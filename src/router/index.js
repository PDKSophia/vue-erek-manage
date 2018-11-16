import Vue from 'vue'
import Router from 'vue-router'
import ErekManageLogin from '@/view/Login/MainLogin'
import ErekManageRouter from '@/view/Manage/Router'
// 后台管理
import VueErekManageIndex from '@/view/Manage/VueErekIndex/Index'

// 列表页
import VueErekTableList from '@/view/Manage/VueErekList/Table'
import VueErekStandardList from '@/view/Manage/VueErekList/Standard'
// 安全管理
import ErekSafeSystem from '@/view/Manage/ErekSafe/System'
import ErekSafeAdminRole from '@/view/Manage/ErekSafe/AdminRole'
import ErekSafeAdminPWD from '@/view/Manage/ErekSafe/AdminPassWord'

// 工具栏
import VueErekToolMessage from '@/view/Manage/VueErekTool/Message'
import VueErekToolAdvertise from '@/view/Manage/VueErekTool/Advertise'
import VueErekToolCommonality from '@/view/Manage/VueErekTool/Commonality'
import VueErekToolWords from '@/view/Manage/VueErekTool/Words'

// 错误页
import VueErekException403 from '@/view/Manage/VueErekException/403'
import VueErekException404 from '@/view/Manage/VueErekException/404'
import VueErekException500 from '@/view/Manage/VueErekException/500'

// 个人页
import VueErekUserInformation from '@/view/Manage/VueErekUser/Information'
import VueErekUserSetting from '@/view/Manage/VueErekUser/Setting'

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
          name: 'VueErekManageIndex',
          component: VueErekManageIndex,
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
          name: 'VueErekToolMessage',
          component: VueErekToolMessage,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-advertise',
          name: 'VueErekToolAdvertise',
          component: VueErekToolAdvertise,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-commonality',
          name: 'VueErekToolCommonality',
          component: VueErekToolCommonality,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-tool-words',
          name: 'VueErekToolWords',
          component: VueErekToolWords,
          meta: {
            keepAlive: false
          }
        },
        // 列表页
        {
          path: 'erek-list-table',
          name: 'VueErekTableList',
          component: VueErekTableList,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-list-standard',
          name: 'VueErekStandardList',
          component: VueErekStandardList,
          meta: {
            keepAlive: false
          } 
        },
        // 错误页
        {
          path: 'erek-exception/403',
          name: 'VueErekException403',
          component: VueErekException403,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-exception/404',
          name: 'VueErekException404',
          component: VueErekException404,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-exception/500',
          name: 'VueErekException500',
          component: VueErekException500,
          meta: {
            keepAlive: false
          } 
        },
        // 个人页
        {
          path: 'erek-user/information',
          name: 'VueErekUserInformation',
          component: VueErekUserInformation,
          meta: {
            keepAlive: false
          } 
        },
        {
          path: 'erek-user/setting',
          name: 'VueErekUserSetting',
          component: VueErekUserSetting,
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