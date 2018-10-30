<template>
  <div>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {
  name: 'ErekManageHeader'
}
</script>

<style scoped lang='scss'>
.layout-logo {
  width: 100px;
  height: 30px;
  background-color: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 400px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
