<template>
  <div id="erek-manage-container">
    <Layout id="erek-layout">
      <erek-header :theme="layoutHeaderTheme" :appname="APP_NAME" />
      <erek-sider
        :Menu="Menu"
        :BreadItem="BreadItem"
        :theme="layoutMenuTheme"
      />
    </Layout>
  </div>
</template>

<script>
import ErekHeader from '../../pages/Layouts/Header.vue';
import ErekSider from '../../pages/Layouts/Sider.vue';
import Menu from '../../config/menu';
import BreadItem from '../../config/breadItem';
import { app, theme } from '../../config/app';
import { getAuthorityToken, getAuthorityRole } from '../../utils/vue-token';
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
      layoutHeaderTheme: {},
      layoutMenuTheme: {},
      APP_NAME: ''
    };
  },
  watch: {
    $route: {
      // 路由监听
      handler: function(val) {
        for (let key in BreadItem) {
          if (val.path == key) {
            this.BreadItem = BreadItem[key];
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
    // this.layoutTheme = Object.assign(...theme);
    // console.log(this.layoutTheme);
    this.layoutHeaderTheme = { ...theme.APP_THEME.LAYOUT_HEADER };
    this.layoutMenuTheme = { ...theme.APP_THEME.LAYOUT_MENU };
    this.APP_NAME = app.APP_NAME;
    console.log('@@@@@', theme.APP_THEME);
    if (getAuthorityToken() == undefined || getAuthorityToken() == '') {
      this.$tool.toastTips('error', 'token 已过期，请重新登陆', 1.5);
      setTimeout(() => {
        this.$router.push({
          path: '/login'
        });
      }, 1000);
    } else if (getAuthorityRole() !== 'admin') {
      this.$tool.toastTips('error', '对不起，您无权访问', 1.5);
      setTimeout(() => {
        this.$router.push({
          path: '/login'
        });
      }, 1000);
    } else {
      // 获取用户信息
      this.$api.user.fetchCurrentUser().then(res => {
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
