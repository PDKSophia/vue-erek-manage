<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  background: #000000;
}
ul,
li {
  list-style: none;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
.erek-input {
  display: inline-block;
  width: 70%;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  outline: none;
}
.erek-select {
  display: block;
  box-sizing: border-box;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdee2;
}
.ivu-input-group-append,
.ivu-input-group-prepend {
  background-color: rgb(36, 36, 36) !important;
  border: 1px solid rgb(36, 36, 36) !important;
}

.ivu-input-group {
  display: inline-table !important;
}
.ivu-menu-item > i {
  font-size: 17px;
  margin-top: -3px;
}
.ivu-menu-submenu-title span > i,
.ivu-menu-submenu-title > i {
  font-size: 16px;
  margin-top: -3px;
}
.ivu-menu {
  color: #f1f1f1 !important;
}

.ivu-divider,
.ivu-divider-vertical {
  height: 1.4rem !important;
  margin: 0 14px !important;
}
</style>
