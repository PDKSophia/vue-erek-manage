<template>
  <div id="erek-manage-container">
    <Layout id='erek-layout'>
      <erek-header />
      <erek-sider :Menu='Menu' :BreadItem='BreadItem'/>
    </Layout>
  </div>
</template>

<script>
import ErekHeader from '../../erekPages/Layouts/Header.vue'
import ErekSider from '../../erekPages/Layouts/Sider.vue'
import Menu from '../../config/menu'
import BreadItem from '../../config/breadItem'
import { getAuthorityToken } from '../../utils/vue-token'
import { mapActions } from 'vuex'
export default {
  name: 'ErekManageContainer',
  components: {
    ErekHeader,
    ErekSider
  },
  data () {
    return {
      Menu: Menu,
      BreadItem: '首页'
    }
  },
  watch: {
    $route: { // 路由监听
      handler: function(val) {
        // console.log('新路由: ', val)
        for (let key in BreadItem) {
          if (val.path == key) {
            this.BreadItem = BreadItem[key]
          }
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions([
      'setErekUser'
    ])
  },
  mounted() {
    if (getAuthorityToken() == undefined || getAuthorityToken() == '') {
      this.$tool.toastTips('error', 'token 已过期，请重新登陆', 1.5)
      setTimeout(() => {
        this.$router.push({
          path: '/'
        })
      })
    } else {
      // 获取用户信息
      this.$api.fetchCurrentUser().then(res => {
        this.setErekUser(res)
      })
    }
  },
}
</script>
<style scoped lang='scss'>
#erek-manage-container, #erek-layout{
  height: 100%;
  width: 100%;
}
</style>
