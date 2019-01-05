<template>
  <div>
    <Header :style="{ height: `${theme.HEADER_HEADER} !important` }">
      <Menu
        mode="horizontal"
        theme="drink"
        active-name="1"
        :style="{
          backgroundColor: theme.BG_HEADER_COLOR,
          color: `${theme.FONT_HEADER_COLOR} !important`,
          height: `${theme.HEADER_HEADER} !important`
        }"
      >
        <div
          class="layout-logo"
          :style="{ backgroundColor: theme.bgLogoVueErek }"
        >
          <p
            class="erek-vue-manage"
            :style="{ color: `${theme.colorVueErek} !important` }"
            >{{ appname }}</p
          >
        </div>
        <div
          class="layout-nav"
          :style="{ color: `${theme.colorVueErek} !important` }"
        >
          <MenuItem name="1" :style="{ float: 'right' }">
            <Icon type="md-log-out"></Icon>
            <span @click="handleLoginOut">Log out</span>
          </MenuItem>
          <MenuItem name="2" :style="{ float: 'right' }">
            <Icon type="md-person"></Icon>
            {{ erekUser.username }}
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { setAuthorityToken, setAuthorityRole } from '../../utils/vue-token';
export default {
  name: 'ErekManageHeader',
  props: {
    theme: {
      type: Object,
      default: function() {
        return {};
      }
    },
    appname: {
      type: String,
      default: 'Vue-Erek'
    }
  },
  computed: mapState({
    erekUser: state => state.user.erekUser
  }),
  methods: {
    handleLoginOut() {
      console.log('123');
      setAuthorityToken('');
      setAuthorityRole('guest');
      this.$router.push({
        path: '/login'
      });
    }
  },
  mounted() {
    console.log(this.theme);
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
  top: 15px;
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
  margin: 0 auto;
  margin-right: 66px;
}
.ivu-layout-header {
  background: #515a6e;
  padding: 0;
  height: 60px;
  line-height: 64px;
}
</style>
