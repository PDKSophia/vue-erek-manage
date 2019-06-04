<template>
  <div id="erek-manage-container">
    <Layout id="erek-layout">
      <erek-header/>
      <erek-sider :Menu="Menu"/>
    </Layout>
  </div>
</template>

<script>
import ErekHeader from 'components/FrameComponents/Layouts/Header.vue'
import ErekSider from 'components/FrameComponents/Layouts/Sider.vue'
import Menu from 'ekconfig/menu'
import BreadItem from 'ekconfig/bread'
import { getAuthorityToken, getAuthorityRole } from 'utils/auth'
export default {
  name: 'ErekManageContainer',
  components: {
    ErekHeader,
    ErekSider
  },
  data() {
    return {
      Menu: Menu,
      BreadItem: '首页'
    }
  },
  watch: {
    $route: {
      // 路由监听
      handler: function (val) {
        this.$store.dispatch('global/updateHistoryUrlAsync', val.path)
        for (let key in BreadItem) {
          if (val.path == key) {
            this.$store.dispatch('global/retrieveBreadListAsync', BreadItem[key])
          }
        }
      },
      deep: true
    }
  },
  async mounted() {
    if (getAuthorityToken() == undefined || getAuthorityToken() == '') {
      this.$utils.toastTips('error', 'token 已过期，请重新登陆', 1.5)
      setTimeout(() => {
        this.$router.push({
          path: '/login'
        })
      }, 1000)
    } else if (getAuthorityRole() !== 'admin') {
      this.$utils.toastTips('error', '对不起，您无权访问', 1.5)
      setTimeout(() => {
        this.$router.push({
          path: '/login'
        })
      }, 1000)
    } else {
      // 获取用户信息
      await this.$store.dispatch('user/retrieveUserInfoAsync')
    }
  }
}
</script>
<style scoped lang="scss">
#erek-manage-container,
#erek-layout {
  height: 100%;
  width: 100%;
}
</style>
