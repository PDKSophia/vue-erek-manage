<template>
  <div id="erek-manage-container">
    <Layout id="erek-layout">
      <erek-header :theme="layoutTheme.layoutHeader"/>
      <erek-sider :Menu="Menu" :BreadItem="BreadItem" :theme="layoutTheme.layoutMenu"/>
    </Layout>
  </div>
</template>

<script>
import ErekHeader from '../../pages/Layouts/Header.vue';
import ErekSider from '../../pages/Layouts/Sider.vue';
import Menu from '../../config/menu';
import BreadItem from '../../config/breadItem';
import VueErekTheme from '../../config/theme';
import { getAuthorityToken } from '../../utils/vue-token';
import { mapActions } from 'vuex';
export default {
  name: 'ErekManageContainer',
  components: {
    ErekHeader,
    ErekSider
  },
  data() {
    return {
      Menu: Menu,
      BreadItem: '首页',
      layoutTheme: {}
    };
  },
  watch: {
    $route: {
      // 路由监听
      handler: function (val) {
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
    ...mapActions(['setErekUser'])
  },
  mounted() {
    this.layoutTheme = Object.assign(VueErekTheme);
    if (getAuthorityToken() == undefined || getAuthorityToken() == '') {
      this.$tool.toastTips('error', 'token 已过期，请重新登陆', 1.5);
      setTimeout(() => {
        this.$router.push({
          path: '/'
        });
      });
    } else {
      // 获取用户信息
      this.$api.fetchCurrentUser().then(res => {
        this.setErekUser(res);
      });
    }
  }
};
</script>
<style scoped lang="scss">
#erek-manage-container,
#erek-layout {
  height: 100%;
  width: 100%;
}
</style>
