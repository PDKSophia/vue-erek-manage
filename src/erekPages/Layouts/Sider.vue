<template>
  <div :style="{height: '100%'}">
    <Layout :style="{height: '100%'}">
      <Sider hide-trigger :style="{ background: theme.bgVueErek, width: '240px', minWidth: '240px', maxWidth: '240px', height: '100%' }">
        <Menu :active-name='Menu[0].name' :style="{ background: theme.bgVueErek, color: `${theme.colorVueErek} !important` }">
          <div v-for='(item, index) in Menu' :key='index'>
            <!-- 没有子菜单 -->
            <MenuItem :name='item.name' v-if='!item.isSubmenu' :to='item._to'>
              <Icon :type="item.icon" />
                {{ item.text }}
            </MenuItem>
            <!-- 有子菜单 -->
            <Submenu v-if='item.isSubmenu' :name='item.name' >
              <template slot="title">
                <Icon :type="item.icon" />
                {{ item.text }}
              </template>
              <!-- 对这条记录的子菜单栏进行判断 -->
              <div v-for='(sub, key) in item.list' :key='key'>
                <!-- 子菜单有没有子子菜单 -->
                <MenuItem :name='sub.name' v-if='!sub.hasSubmenu' :to='sub._to'>
                    {{ sub.text }}
                </MenuItem>
                <!-- 子菜单有子子菜单 -->
                <Submenu :name='sub.name' v-if='sub.hasSubmenu'>
                  <template slot="title">
                    {{ sub.text }}
                  </template>
                  <MenuItem v-for='(_subs, _index) in sub.submenu' :name='_subs.name' :key='_index' :to='_subs._to'>
                    {{ _subs.text }}
                  </MenuItem>
                </Submenu>
              </div>
            </Submenu>
          </div>
        </Menu>
      </Sider>
      <Layout class="erek-right-layout" :style='{ padding: "0px 24px 24px" }'>
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem v-for='(item, index) in breadList' :key='index'>{{ item }}</BreadcrumbItem>
        </Breadcrumb>
        <Content class="erek-layout-content">
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
export default {
  name: 'ErekManageSider',
  props: {
    Menu: {
      type: Array,
      default: function () {
        return []
      }
    },
    BreadItem: {
      type: String,
      default: ''
    },
    theme: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    BreadItem(params) {
      let arr = params.split('-')
      this.breadList = []
      for (let i = 0; i < arr.length; i++) {
        this.breadList.push(arr[i])
      }
      this.$nextTick(() => {
        console.log('dom is update')
      })
    }
  },
  data () {
    return {
      breadList: ['仪表盘']
    }
  }
}
</script>

<style scoped lang='scss'>
.erek-right-layout {

  > .erek-layout-content {
    background-color: #fff
  }
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: #242427 !important;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
  background: #242427 !important;
  width: 1px !important;
}
</style>
