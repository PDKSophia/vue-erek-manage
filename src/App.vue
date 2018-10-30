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
  name: 'app',
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  width: 100%;
  background: #000000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ivu-input-group-append, .ivu-input-group-prepend {
  background-color: rgb(36, 36, 36) !important;
  border: 1px solid rgb(36, 36, 36) !important;
}
// 输入框错误提示
.ivu-form-item-error-tip {
  color: #f5f5f5 !important;
}
.ivu-form-item-error .ivu-input {
  border: 1px solid rgb(36, 36, 36) !important;
}

.ivu-input {
  background-color: rgb(43, 43, 43) !important;
  border: 1px solid rgb(36, 36, 36) !important;
}
.ivu-input:hover {
  border: 1px solid rgb(36, 36, 36) !important;
}
.ivu-input-group {
  display: inline-table !important;
}
</style>
