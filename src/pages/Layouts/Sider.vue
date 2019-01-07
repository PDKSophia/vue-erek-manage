<template>
  <div :style="{ height: '100%' }">
    <Layout :style="{ height: '100%' }">
      <Sider
        hide-trigger
        :style="{
          background: config.BG_MENU_COLOR,
          width: '240px',
          minWidth: '240px',
          maxWidth: '240px',
          height: '100%'
        }"
      >
        <Menu
          theme="light"
          :active-name="activeMenu"
          :open-names="openName"
          :style="{
            background: config.BG_MENU_COLOR,
            color: `${config.FONT_MENU_COLOR} !important`
          }"
        >
          <div v-for="(item, index) in Menu" :key="index">
            <!-- 没有子菜单 -->
            <MenuItem :name="item.name" v-if="!item.isSubmenu" :to="item._to">
              <Icon :type="item.icon" />
              {{ item.text }}
            </MenuItem>
            <!-- 有子菜单 -->
            <Submenu v-if="item.isSubmenu" :name="item.name">
              <template slot="title">
                <Icon :type="item.icon" />
                {{ item.text }}
              </template>
              <!-- 对这条记录的子菜单栏进行判断 -->
              <div v-for="(sub, key) in item.list" :key="key">
                <!-- 子菜单有没有子子菜单 -->
                <MenuItem
                  :name="sub.name"
                  v-if="!sub.hasSubmenu"
                  :to="sub._to"
                  >{{ sub.text }}</MenuItem
                >
                <!-- 子菜单有子子菜单 -->
                <Submenu :name="sub.name" v-if="sub.hasSubmenu">
                  <template slot="title">{{ sub.text }}</template>
                  <MenuItem
                    v-for="(_subs, _index) in sub.submenu"
                    :name="_subs.name"
                    :key="_index"
                    :to="_subs._to"
                    >{{ _subs.text }}</MenuItem
                  >
                </Submenu>
              </div>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Layout class="erek-right-layout">
        <div class="layout-bread-crumb">
          <Breadcrumb>
            <BreadcrumbItem v-for="(item, index) in breadList" :key="index">
              {{ item }}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Content
          class="erek-layout-content"
          :style="{ padding: '0px 24px 24px' }"
        >
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { theme } from '../../config/app';
import BreadItem from '../../config/breadItem';
export default {
  name: 'ErekManageSider',
  props: {
    Menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    BreadItem: {
      type: String,
      default: ''
    }
  },
  watch: {
    BreadItem(params) {
      let arr = params.split('-');
      this.breadList = [];
      for (let i = 0; i < arr.length; i++) {
        this.breadList.push(arr[i]);
      }
      this.$nextTick(() => {
        console.log('dom is update');
      });
    }
  },
  data() {
    return {
      breadList: ['仪表盘'],
      config: {},
      activeMenu: '',
      openName: ['4']
    };
  },
  mounted() {
    const history = this.$router.history;
    for (let key in BreadItem) {
      if (history.current.path == key) {
        this.BreadItem = BreadItem[key];
      }
    }
    this.config = { ...theme.APP_THEME.LAYOUT_MENU };
    this.Menu.map(item => {
      if (item._to === history.current.path) {
        this.openName = [];
        let name = item.name;
        this.openName[0] = name;
        this.activeMenu = item.name;
      } else if (item.isSubmenu) {
        item.list.map(idx => {
          if (idx._to === history.current.path) {
            this.openName = [];
            let name = item.name;
            this.openName[0] = name;
            this.activeMenu = idx.name;
          } else if (idx.hasSubmenu) {
            idx.submenu.map(last => {
              if (last._to === history.current.path) {
                this.activeMenu = last.name;
              }
            });
          }
        });
      } else {
        this.openName.push(this.Menu[0].name);
        this.activeMenu = this.Menu[0].name;
      }
    });

    // console.log(this.activeMenu);
    console.log(this.openName);
  }
};
</script>

<style scoped lang="scss">
.erek-right-layout {
  height: 100%;

  > .erek-layout-content {
    background-color: #f5f7f9;
    height: 100%;
  }
}
.layout-bread-crumb {
  padding: 24px 24px;
  background-color: white;
  margin-bottom: 24px;

  > .bread-title {
    margin: 12px 0 0;
  }
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #dbdbdb !important;
  color: #232323 !important;
}
.ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu):after {
  background: #dbdbdb !important;
  width: 1px !important;
}
</style>
