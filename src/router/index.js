import Vue from 'vue'
import Router from 'vue-router'
import ErekManageRouter from '@/view/Router'

// 首页
import ErekManageIndex from '@/view/Index/Index'
// 登陆页
import ErekManageLogin from '@/view/Login/Login'

// 后台管理
import VueErekManageIndex from '@/view/Manage/VueErekIndex/Index'

// 列表页
import VueErekTableList from '@/view/Manage/VueErekList/Table'
import VueErekStandardList from '@/view/Manage/VueErekList/Standard'
import VueErekCardList from '@/view/Manage/VueErekList/Card'
import VueErekAvatarList from '@/view/Manage/VueErekList/Avatar'

// 详情页
import VueErekBaseProfile from '@/view/Manage/VueErekProfile/BasicProfile'
import VueEreAdvanceProfile from '@/view/Manage/VueErekProfile/AdvanceProfile'

// 错误页
import VueErekException403 from '@/view/Manage/VueErekException/403'
import VueErekException404 from '@/view/Manage/VueErekException/404'
import VueErekException500 from '@/view/Manage/VueErekException/500'

// 个人页
import VueErekUserInformation from '@/view/Manage/VueErekUser/Information'
import VueErekUserSetting from '@/view/Manage/VueErekUser/Setting'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ErekManageIndex',
      component: ErekManageIndex,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/login',
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
        // 详情页
        {
          path: 'erek-profile-basic',
          name: 'VueErekBaseProfile',
          component: VueErekBaseProfile,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-profile-advance',
          name: 'VueEreAdvanceProfile',
          component: VueEreAdvanceProfile,
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
        {
          path: 'erek-list-card',
          name: 'VueErekCardList',
          component: VueErekCardList,
          meta: {
            keepAlive: false
          }
        },
        {
          path: 'erek-list-avatar',
          name: 'VueErekAvatarList',
          component: VueErekAvatarList,
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
        }
      ],
      meta: {
        keepAlive: false
      }
    }
  ]
})
export default router
