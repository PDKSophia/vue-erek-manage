<template>
  <div>
    <Header :style="{ height: `${theme.height} !important` }">
      <Menu
        mode="horizontal"
        theme="dark"
        active-name="1"
        :style="{ backgroundColor: theme.bgVueErek, color: `${theme.colorVueErek} !important`, height: `${theme.height} !important` }"
      >
        <div class="layout-logo" :style="{ backgroundColor: theme.bgLogoVueErek }">
          <p
            class="erek-vue-manage"
            :style="{ color: `${theme.colorVueErek} !important` }"
          >Vue Erek Manage</p>
        </div>
        <div class="layout-nav" :style="{ color: `${theme.colorVueErek} !important` }">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>Item 1
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>Item 2
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {
  name: 'ErekManageHeader',
  props: {
    theme: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.layout-logo {
  width: 160px;
  height: 30px;
  background-color: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  text-align: center;
  left: 80px;

  .erek-vue-manage {
    color: white;
    margin-top: -13px;
  }
}
.layout-nav {
  width: 400px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-header {
  background: #515a6e;
  padding: 0;
  height: 60px;
  line-height: 64px;
}
</style>
