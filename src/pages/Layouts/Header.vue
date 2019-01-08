<template>
  <div>
    <Header :style="{ height: `${config.HEADER_HEADER} !important` }">
      <Menu
        mode="horizontal"
        active-name="1"
        :theme="menuTheme"
        :style="{
          backgroundColor: config.BG_HEADER_COLOR,
          color: `${config.FONT_HEADER_COLOR} !important`,
          height: `${config.HEADER_HEADER} !important`
        }"
      >
        <div
          class="layout-logo"
          :style="{ backgroundColor: config.bgLogoVueErek }"
        >
          <p
            class="erek-vue-manage"
            :style="{ color: `${config.colorVueErek} !important` }"
            >{{ appname }}</p
          >
        </div>
        <div
          class="layout-nav"
          :style="{
            color: `${config.colorVueErek} !important`,
            height: `${config.HEADER_HEADER} !important`
          }"
        >
          <MenuItem name="1">
            <Icon type="md-person"></Icon>
            {{ erekUser.username }}
          </MenuItem>
          <MenuItem name="2">
            <Icon type="md-log-out"></Icon>
            <span @click="handleLoginOut">Log out</span>
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { app, theme } from '../../config/app';
import { setAuthorityToken, setAuthorityRole } from '../../utils/vue-token';
export default {
  name: 'ErekManageHeader',
  computed: mapState({
    erekUser: state => state.user.erekUser
  }),
  data() {
    return {
      appname: '',
      config: {},
      menuTheme: 'dark'
    };
  },
  methods: {
    handleLoginOut() {
      setAuthorityToken('');
      setAuthorityRole('guest');
      this.$router.push({
        path: '/login'
      });
    }
  },
  mounted() {
    this.appname = app.APP_NAME;
    this.config = { ...theme.APP_THEME.LAYOUT_HEADER };
  }
};
</script>

<style scoped lang="scss">
.layout-logo {
  width: 200px;
  height: 30px;
  background-color: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 20px;
  text-align: center;
  left: 10px;

  .erek-vue-manage {
    color: white;
    margin-top: -13px;
    font-weight: 600;
    font-size: 20px;
  }
}
.layout-nav {
  width: 400px;
  height: 70px;
  margin: 0 auto;
  margin-right: 66px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.ivu-layout-header {
  background: #515a6e;
  padding: 0;
  height: 70px;
  line-height: 70px;
}
</style>
